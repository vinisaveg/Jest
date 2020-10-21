import { myCar } from "../index";

test("Car with 2 or more doors", () => {
  expect(myCar.doors).toBeGreaterThanOrEqual(2);
});
