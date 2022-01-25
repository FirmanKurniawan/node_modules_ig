"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const ava_1 = __importDefault(require("ava"));
ava_1.default('integer() returns a random boolean', (t) => {
    t.is(typeof main_1.integer(), 'number');
});
ava_1.default('integer() returns a random integer', (t) => {
    t.is(typeof main_1.integer(), 'number');
});
ava_1.default('integer() is sometimes negative, sometimes positive', (t) => {
    let positiveCount = 0;
    for (let i = 0; i < 1000; i++) {
        if (main_1.integer() > 0) {
            positiveCount++;
        }
    }
    // Note: In very extreme circumstances this test may fail as, by its
    // nature it's random. But it's a low enough percentage that I'm
    // willing to accept it.
    t.true((positiveCount > 200) && (positiveCount < 800));
});
ava_1.default('integer() can take a zero min and obey it', (t) => {
    for (let i = 0; i < 1000; i++) {
        t.true(main_1.integer({ min: 0 }) > 0);
    }
});
ava_1.default('integer() can take a negative min and obey it', (t) => {
    for (let i = 0; i < 1000; i++) {
        t.true(main_1.integer({ min: -25 }) > -26);
    }
});
ava_1.default('integer() can take a negative min and max and obey both', (t) => {
    for (let i = 0; i < 1000; i++) {
        const int = main_1.integer({ min: -25, max: -1 });
        t.true((int > -26) && (int < 0));
    }
});
ava_1.default('integer() can take a min with absolute value less than max and return in range above', (t) => {
    let count = 0;
    for (let i = 0; i < 1000; i++) {
        // With a range this large we'd expect most values to be
        // greater than 1 if this works correctly.
        if (Math.abs(main_1.integer({ min: -1, max: 1000000 })) < 2) {
            count++;
        }
    }
    t.true(count < 900);
});
ava_1.default('integer() throws an error when min > max', (t) => {
    const fn = () => main_1.integer({ min: 1000, max: 500 });
    t.throws(fn, 'Chance: Min cannot be greater than Max.');
});
//# sourceMappingURL=main.test.js.map