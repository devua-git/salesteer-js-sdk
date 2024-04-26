export type GenericObject = Record<string, unknown>
export type PrimitiveType = string | number | boolean | Date
export type PrimitiveWithNullType = string | number | boolean | Date | null

export type ParamsOf<
  D,
  T extends (...params: readonly D[]) => unknown,
> = T extends (...params: infer P) => unknown ? P : never
