export interface IIntegerOptions {
    min?: number;
    max?: number;
}
/**
 *  Return a random integer
 *
 *  NOTE the max and min are INCLUDED in the range. So:
 *  chance.integer({min: 1, max: 3});
 *  would return either 1, 2, or 3.
 *
 *  @param {Object} [options={}] can specify a min and/or max
 *  @returns {Number} a single random integer number
 *  @throws {RangeError} min cannot be greater than max
 */
export declare function integer(options?: IIntegerOptions): number;
//# sourceMappingURL=main.d.ts.map