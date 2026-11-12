import { test } from "node:test";
import assert from "node:assert/strict";
import { scorePSSUQ, summarizeStudy } from "../src/domain/pssuq.ts";
import type { Answer } from "../src/domain/pssuq.ts";

const filled = (value: Answer): Answer[] => Array.from({ length: 16 }, () => value);

test("limites: todos 1 e todos 7 preservam a escala original", () => {
  for (const value of [1, 7]) {
    for (const scale of Object.values(scorePSSUQ(filled(value)))) assert.equal(scale.mean, value);
  }
});
test("caso manual: fatores 1, 2, 3 e item 16 = 7 produzem geral 34/16", () => {
  const score = scorePSSUQ([...Array(6).fill(1), ...Array(6).fill(2), 3, 3, 3, 7]);
  assert.equal(score.overall.mean, 2.125);
  assert.equal(score.sysUse.mean, 1);
  assert.equal(score.infoQual.mean, 2);
  assert.equal(score.intQual.mean, 3);
});
test("item 16 altera apenas o geral", () => {
  const answers = filled(1); answers[15] = 7;
  const score = scorePSSUQ(answers);
  assert.equal(score.overall.mean, 1.375);
  assert.equal(score.intQual.mean, 1);
});
test("NA e ausência são distintos; denominador usa apenas números", () => {
  const answers = filled(null); answers[0] = 1; answers[1] = 3; answers[2] = "NA";
  const score = scorePSSUQ(answers);
  assert.deepEqual(score.sysUse, { mean: 2, nAnswered: 2, nNA: 1, nMissing: 3, nItems: 6 });
  assert.equal(score.overall.mean, 2);
  assert.equal(score.infoQual.mean, null);
});
test("sem números: resultado indisponível, nunca zero nem NaN", () => {
  assert.equal(scorePSSUQ(filled("NA")).overall.mean, null);
  assert.equal(scorePSSUQ(filled(null)).overall.mean, null);
});
test("validação rejeita limites, coerção, frações, tamanho e arrays esparsos", () => {
  for (const invalid of [0, 8, -1, 1.5, NaN, Infinity, "3", true, undefined, {}]) {
    const answers: unknown[] = filled(1); answers[5] = invalid;
    assert.throws(() => scorePSSUQ(answers));
  }
  assert.throws(() => scorePSSUQ(Array(16)));
  assert.throws(() => scorePSSUQ([1, 2]));
  assert.throws(() => scorePSSUQ({}));
});
test("precisão: mantém frações sem arredondar no cálculo", () => {
  const answers = filled(null); answers[0] = 1; answers[1] = 1; answers[2] = 2;
  assert.equal(scorePSSUQ(answers).sysUse.mean, 4 / 3);
});
test("agregação dá peso igual a cada pessoa mesmo com ausências", () => {
  const partial = filled(null); partial[0] = 7;
  const summary = summarizeStudy([filled(1), partial]);
  assert.equal(summary.overall.mean, 4);
  assert.equal(summary.overall.n, 2);
  assert.equal(summary.overall.sd, Math.sqrt(18));
  assert.equal(summary.infoQual.mean, 1);
  assert.equal(summary.infoQual.n, 1);
  assert.equal(summary.infoQual.sd, null);
});
test("amostra vazia e pessoas sem escore não inventam estatísticas", () => {
  assert.deepEqual(summarizeStudy([]).overall, { mean: null, sd: null, n: 0 });
  assert.deepEqual(summarizeStudy([filled("NA")]).overall, { mean: null, sd: null, n: 0 });
});
