import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import pg from "pg";

if (!process.env.DATABASE_URL) throw new Error("Configure DATABASE_URL em .env.");
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const client = await pool.connect();
try {
  const mode = process.argv[2];
  if (mode === "check") {
    const { rows } = await client.query("SELECT current_database() AS database, version() AS version");
    console.log(rows[0]);
  } else if (mode === "apply") {
    const sql = await readFile(new URL("../db/migrations/001_initial.sql", import.meta.url), "utf8");
    const sha = createHash("sha256").update(sql).digest("hex");
    await client.query("BEGIN");
    // A fixed transaction-level advisory lock serializes initial migrations.
    await client.query("SELECT pg_advisory_xact_lock(50435355)");
    await client.query("CREATE TABLE IF NOT EXISTS schema_migration (id text PRIMARY KEY, sha256 text NOT NULL, applied_at timestamptz NOT NULL DEFAULT now())");
    const existing = await client.query("SELECT sha256 FROM schema_migration WHERE id = $1", ["001_initial"]);
    if (existing.rows.length) {
      if (existing.rows[0].sha256 !== sha) throw new Error("Migração aplicada difere do arquivo; crie nova migração.");
      console.log("Migração 001_initial já aplicada.");
    } else {
      await client.query(sql);
      await client.query("INSERT INTO schema_migration (id, sha256) VALUES ($1, $2)", ["001_initial", sha]);
      console.log("Migração 001_initial aplicada.");
    }
    await client.query("COMMIT");
  } else {
    throw new Error("Use: node --env-file=.env scripts/db.mjs apply|check");
  }
} catch (error) {
  await client.query("ROLLBACK");
  throw error;
} finally {
  client.release();
  await pool.end();
}
