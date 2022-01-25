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
ava_1.default('integer() exists and returns a number', (t) => {
    t.is(typeof main_1.integer(), 'number');
});
//# sourceMappingURL=main.test.js.map