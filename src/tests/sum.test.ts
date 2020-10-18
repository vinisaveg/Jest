import { sum, reduce } from "../index"
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
})

test("reduces by 1 the given number", () => {
  expect(reduce(5)).toBe(4)
})
