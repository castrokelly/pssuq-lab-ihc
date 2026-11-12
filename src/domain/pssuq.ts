/** PSSUQ v3: math only. No item wording or participant collection in this module. */
export const INSTRUMENT_VERSION = "PSSUQ-3" as const;
export const SCORING_VERSION = "pssuq3-mean-available-v1" as const;
export type Answer = number | "NA" | null;
export type ScaleResult = {
  mean: number | null;
  nAnswered: number;
  nNA: number;
  nMissing: number;
  nItems: number;
};

export const SCALES = {
  overall: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  sysUse: [1, 2, 3, 4, 5, 6],
  infoQual: [7, 8, 9, 10, 11, 12],
  intQual: [13, 14, 15],
} as const;
export type ScaleName = keyof typeof SCALES;

export function validateAnswers(input: unknown): asserts input is Answer[] {
  if (!Array.isArray(input) || input.length !== 16) {
    throw new RangeError("São necessárias exatamente 16 posições, na ordem dos itens.");
  }
  for (let i = 0; i < 16; i++) {
    // Indexed loop intentionally rejects sparse arrays/undefined.
    const value = input[i];
    if (value === null || value === "NA") continue;
    if (typeof value !== "number" || !Number.isInteger(value) || value < 1 || value > 7) {
      throw new TypeError(`Resposta inválida no item ${i + 1}: use inteiro 1–7, NA ou null.`);
    }
  }
}

export function scorePSSUQ(input: unknown): Record<ScaleName, ScaleResult> {
  validateAnswers(input);
  const result = {} as Record<ScaleName, ScaleResult>;
  for (const name of Object.keys(SCALES) as ScaleName[]) {
    const values = SCALES[name].map((item) => input[item - 1]);
    const numeric = values.filter((value): value is number => typeof value === "number");
    result[name] = {
      mean: numeric.length ? numeric.reduce((sum, value) => sum + value, 0) / numeric.length : null,
      nAnswered: numeric.length,
      nNA: values.filter((value) => value === "NA").length,
      nMissing: values.filter((value) => value === null).length,
      nItems: values.length,
    };
  }
  return result;
}

/** App analysis convention: equal weight per participant, never pool item cells. */
export function summarizeStudy(participants: readonly unknown[]) {
  const scores = participants.map(scorePSSUQ);
  const result = {} as Record<ScaleName, { mean: number | null; sd: number | null; n: number }>;
  for (const name of Object.keys(SCALES) as ScaleName[]) {
    const values = scores.map((score) => score[name].mean).filter((v): v is number => v !== null);
    const n = values.length;
    const mean = n ? values.reduce((a, b) => a + b, 0) / n : null;
    const sd = n > 1 && mean !== null
      ? Math.sqrt(values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (n - 1))
      : null;
    result[name] = { mean, sd, n };
  }
  return result;
}
