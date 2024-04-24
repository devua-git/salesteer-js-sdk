export function getEnumKeys<
  V,
  K extends string | number,
  T extends Record<K, V>,
>(e: T): (keyof T)[] {
  return (Object.keys(e) as (keyof T)[]).filter((key) => !isNaN(Number(e[key])))
}

export function getEnumValues<
  V,
  K extends string | number,
  T extends Record<K, V>,
>(e: T): T[keyof T][] {
  return getEnumKeys(e).map((k) => e[k])
}
