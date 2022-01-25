"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const ava_1 = __importDefault(require("ava"));
ava_1.default('floating() returns a random floating', (t) => {
    t.is(typeof main_1.floating(), 'number');
});
ava_1.default('floating() can take both a max and min and obey them both', (t) => {
    for (let i = 0; i < 10; i++) {
        const float = main_1.floating({ min: 90, max: 100 });
        // console.log(float)
        t.true(float > 89, `Expected float to be greater than 89, got ${float}`);
        t.true(float < 101, `Expected float to be smaller than 101, got ${float}`);
    }
});
ava_1.default('floating() will not take fixed + min that would be out of range', (t) => {
    const fn = () => main_1.floating({ min: -9007199254740992, fixed: 13 });
    t.throws(fn, "Chance: Min specified is out of range with fixed. Min should be, at least, -900.7199254740992");
});
ava_1.default('floating() will not take fixed + max that would be out of range', (t) => {
    const fn = () => main_1.floating({ max: 9007199254740992, fixed: 13 });
    t.throws(fn, "Chance: Max specified is out of range with fixed. Max should be, at most, 900.7199254740992");
});
ava_1.default('floating() obeys the fixed parameter, when present', (t) => {
    for (let i = 0; i < 10; i++) {
        const float = main_1.floating({ fixed: 4 });
        const decimals = float.toString().split('.')[1] ? float.toString().split('.')[1] : '';
        t.true(decimals.length < 5);
    }
});
ava_1.default('floating() can take fixed and obey it', (t) => {
    for (let i = 0; i < 10; i++) {
        const float = main_1.floating({ fixed: 3 });
        const parsed = parseFloat(float.toFixed(3));
        t.is(float, parsed);
    }
});
//# sourceMappingURL=main.test.js.map