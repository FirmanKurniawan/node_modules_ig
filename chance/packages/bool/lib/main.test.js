"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const ava_1 = __importDefault(require("ava"));
ava_1.default('bool() returns a random boolean', (t) => {
    t.is(typeof main_1.bool(), 'boolean');
});
ava_1.default('bool() is within the bounds of what we would call random', (t) => {
    let trueCount = 0;
    for (let i = 0; i < 1000; i++) {
        if (main_1.bool()) {
            trueCount++;
        }
    }
    // The probability of this test failing is approximately 4.09e-86.
    // So, in theory, it could give a false negative, but the sun will
    // probably die long before that happens.
    t.true((trueCount > 200) && (trueCount < 800));
});
ava_1.default('bool() takes and obeys likelihood', (t) => {
    let trueCount = 0;
    for (let i = 0; i < 1000; i++) {
        if (main_1.bool({ likelihood: 30 })) {
            trueCount++;
        }
    }
    // Expect it to average around 300
    t.true((trueCount > 200) && (trueCount < 400));
    trueCount = 0;
    for (let i = 0; i < 1000; i++) {
        if (main_1.bool({ likelihood: 99 })) {
            trueCount++;
        }
    }
    // Expect it to average at 990
    t.true(trueCount > 900);
});
ava_1.default('bool() throws an error if likelihood < 0 or > 100', (t) => {
    const fn1 = () => main_1.bool({ likelihood: -23 });
    t.throws(fn1, RangeError);
    const fn2 = () => main_1.bool({ likelihood: 7933 });
    t.throws(fn2, RangeError);
});
//# sourceMappingURL=main.test.js.map