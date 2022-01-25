export interface IFloatingOptions {
    min?: number;
    max?: number;
    fixed?: number;
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
export declare function floating(options?: IFloatingOptions): number;
//# sourceMappingURL=main.d.ts.map