"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const ava_1 = __importDefault(require("ava"));
const chance = new main_1.Core();
ava_1.default('chance() returns a random number', (t) => {
    t.is(typeof chance.random(), 'number');
});
ava_1.default('chance() returns a random number between 0 and 1', (t) => {
    for (let i = 0; i < 1000; i++) {
        t.true(chance.random() >= 0 && chance.random() <= 1);
    }
});
//# sourceMappingURL=main.test.js.map