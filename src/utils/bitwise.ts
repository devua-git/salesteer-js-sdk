export function isFlagSet(bitwiseValue: number, flag: number) {
  return (bitwiseValue & flag) === flag
}

export function setFlag(bitwiseValue: number, flag: number) {
  return (bitwiseValue |= flag)
}

export function unsetFlag(bitwiseValue: number, flag: number) {
  return (bitwiseValue &= ~flag)
}

export function getFlags(bitwiseValue: number): number[] {
  const MAX_FLAGS = 16
  let flagCheck = 1
  const flags = []

  for (let i = 0; i < MAX_FLAGS; i++) {
    if (isFlagSet(bitwiseValue, flagCheck)) {
      flags.push(flagCheck)
    }

    flagCheck = flagCheck << 1
  }

  return flags
}
