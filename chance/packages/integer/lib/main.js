"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@chancejs/core");
const core = new core_1.Core();
// 9007199254740992 (2^53) is the max integer number in JavaScript
// See: http://vq.io/132sa2j
const MAX_INT = 9007199254740992;
const MIN_INT = -MAX_INT;
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
function integer(options) {
    if (options === undefined) {
        options = {
            min: MIN_INT,
            max: MAX_INT,
        };
    }
    const { min = MIN_INT, max = MAX_INT } = options;
    if (min > max) {
        throw new RangeError('Chance: Min cannot be greater than Max.');
    }
    return Math.floor(core.random() * (max - min + 1) + min);
}
exports.integer = integer;
//# sourceMappingURL=main.js.map