import { getMyName } from "../index";

test("promise to get my name right", () => {
  let name = "vinicius";

  return getMyName(name).then((response) => {
    expect(response.name).toBe(name);
  });
});
