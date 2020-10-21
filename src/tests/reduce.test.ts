import { reduce } from "../index";

test("reduces by 1 the given number", () => {
  expect(reduce(5)).toBe(4);
});
