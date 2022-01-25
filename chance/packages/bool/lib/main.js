"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@chancejs/core");
const chance = new core_1.Core();
/**
 *  Return a random bool, either true or false
 *
 *  @param {Object} [options={ likelihood: 50 }] alter the likelihood of
 *    receiving a true or false value back.
 *  @throws {RangeError} if the likelihood is out of bounds
 *  @returns {Bool} either true or false
 */
function bool(options) {
    let likelihood;
    if (options === undefined) {
        likelihood = 50;
    }
    else {
        likelihood = options.likelihood;
    }
    if (likelihood < 0 || likelihood > 100) {
        throw new RangeError('Chance: Likelihood accepts values from 0 to 100.');
    }
    return chance.random() * 100 < likelihood;
}
exports.bool = bool;
//# sourceMappingURL=main.js.map