import { checkGivenInfo } from "../index";

test(" checks given info if exists", () => {
  let info = "I am 24 YO";

  expect(checkGivenInfo(info)).toBeTruthy();
});

test(" checks given info if exists", () => {
  let info = "I Love to dance";

  expect(checkGivenInfo(info)).toBeFalsy();
});
