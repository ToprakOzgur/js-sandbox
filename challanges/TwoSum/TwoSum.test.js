const twoSumTest = require("./TwoSum");

test("should first", () => {
  expect(twoSumTest([2, 7], 9).sort()).toEqual([0, 1]);
});
