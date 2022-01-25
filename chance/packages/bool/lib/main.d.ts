export interface IBoolOptions {
    likelihood: number;
}
/**
 *  Return a random bool, either true or false
 *
 *  @param {Object} [options={ likelihood: 50 }] alter the likelihood of
 *    receiving a true or false value back.
 *  @throws {RangeError} if the likelihood is out of bounds
 *  @returns {Bool} either true or false
 */
export declare function bool(options?: IBoolOptions): boolean;
//# sourceMappingURL=main.d.ts.map