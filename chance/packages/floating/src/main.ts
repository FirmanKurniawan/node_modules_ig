import { integer } from '@chancejs/integer'

const MAX_INT = 9007199254740992
const MIN_INT = -MAX_INT

export interface IFloatingOptions {
  min?: number
  max?: number
  fixed?: number
}

/**
 *  Return a random floating point number
 *
 *  @param {Number} min the minimum value
 *  @param {Number} max the maximum value
 *  @param {Number} fixed the number of decimal points
 *  @returns {Number} a single floating point number
 *  @throws {RangeError} Can only specify fixed or precision, not both. Also
 *    min cannot be greater than max
 */
export function floating(options?: IFloatingOptions): number {
  // Set default value for options if none provided
  if (options === undefined) {
    options = {
      min: MIN_INT,
      max: MAX_INT,
      fixed: 4,
    }
  }

  const {
    min: iMin = MIN_INT,
    max: iMax = MAX_INT,
    fixed: iFixed = 4,
  } = options

  // console.log(`Requested a floating with { min: ${iMin}, max: ${iMax}, fixed: ${iFixed} }`)
  const fixed = Math.pow(10, iFixed)
  // Range checks
  const max = MAX_INT / fixed
  const min = -max

  if (min && iFixed && min < iMin) {
    // console.log(iMin, iFixed, min)
    throw new RangeError(`Chance: Min specified is out of range with fixed. Min should be at least, ${iMin}`)
  }

  if (max && iFixed && max > iMax) {
    throw new RangeError(`Chance: Max specified is out of range with fixed. Max should be at most, ${iMax}`)
  }
  const num = integer({ min: iMin * fixed, max: iMax * fixed })
  const result = parseFloat((num / fixed).toFixed(iFixed))
  return result
}
