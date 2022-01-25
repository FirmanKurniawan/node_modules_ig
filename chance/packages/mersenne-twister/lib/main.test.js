"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const ava_1 = __importDefault(require("ava"));
ava_1.default("test", (t) => {
    const twister = new main_1.MersenneTwister(21);
    const random = twister.random();
    t.true(random > 0);
    t.true(random < 1);
    //  t.deepEqual(random, 2)
});
//# sourceMappingURL=main.test.js.map