"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test("adds 1 + 2 to equal 3", () => {
    expect(index_1.sum(1, 2)).toBe(3);
});
test("reduces by 1 the given number", () => {
    expect(index_1.reduce(5)).toBe(4);
});
