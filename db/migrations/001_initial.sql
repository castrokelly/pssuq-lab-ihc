-- Initial PostgreSQL schema. Flow rules belong to the server service layer.
CREATE TABLE researcher (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_subject text UNIQUE NOT NULL,
  display_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE instrument_snapshot (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  instrument_version text NOT NULL CHECK (instrument_version = 'PSSUQ-3'),
  language text NOT NULL,
  item_count smallint NOT NULL DEFAULT 16 CHECK (item_count = 16),
  content jsonb NOT NULL CHECK (jsonb_typeof(content) = 'object'),
  content_sha256 text NOT NULL CHECK (content_sha256 ~ '^[0-9a-f]{64}$'),
  source_citation text NOT NULL,
  protocol_reviewed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (instrument_version, language, content_sha256)
);
CREATE TABLE study (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL REFERENCES researcher(id),
  snapshot_id uuid NOT NULL REFERENCES instrument_snapshot(id),
  title text NOT NULL CHECK (length(trim(title)) > 0),
  objective text NOT NULL,
  system_name text NOT NULL,
  system_version text NOT NULL,
  tasks jsonb NOT NULL CHECK (jsonb_typeof(tasks) = 'array' AND jsonb_array_length(tasks) > 0),
  participation_notice text NOT NULL,
  status text NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT','OPEN','CLOSED','ARCHIVED')),
  created_at timestamptz NOT NULL DEFAULT now(),
  opened_at timestamptz,
  closed_at timestamptz
);
CREATE INDEX study_owner_idx ON study(owner_id);
CREATE TABLE evaluation_session (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  study_id uuid NOT NULL REFERENCES study(id),
  token_hash text UNIQUE NOT NULL CHECK (token_hash ~ '^[0-9a-f]{64}$'),
  status text NOT NULL DEFAULT 'CREATED' CHECK (status IN ('CREATED','TASKS_FINISHED','SUBMITTED')),
  created_at timestamptz NOT NULL DEFAULT now(),
  tasks_finished_at timestamptz,
  submitted_at timestamptz,
  scoring_version text,
  CHECK (status <> 'TASKS_FINISHED' OR tasks_finished_at IS NOT NULL),
  CHECK (status <> 'SUBMITTED' OR
    (tasks_finished_at IS NOT NULL AND submitted_at IS NOT NULL AND scoring_version IS NOT NULL))
);
CREATE INDEX session_study_idx ON evaluation_session(study_id);
CREATE TABLE item_response (
  session_id uuid NOT NULL REFERENCES evaluation_session(id),
  item_number smallint NOT NULL CHECK (item_number BETWEEN 1 AND 16),
  response_state text NOT NULL CHECK (response_state IN ('ANSWERED','NA','MISSING')),
  value smallint,
  comment text,
  PRIMARY KEY (session_id, item_number),
  CHECK ((response_state = 'ANSWERED' AND value IS NOT NULL AND value BETWEEN 1 AND 7)
    OR (response_state IN ('NA','MISSING') AND value IS NULL))
);
-- No participant data or fake canonical questionnaire is seeded.
-- Required before real collection: transaction service, exact 16-response validation,
-- owner authorization, immutable reviewed snapshot, state transitions and integration tests.
