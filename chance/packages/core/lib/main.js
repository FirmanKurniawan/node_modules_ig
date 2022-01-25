"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mersenne_twister_1 = require("@chancejs/mersenne-twister");
class Core {
    constructor() {
        const mt = new mersenne_twister_1.MersenneTwister(new Date().getTime());
        this.random = mt.random;
    }
}
exports.Core = Core;
//# sourceMappingURL=main.js.map