const isPalindrome = require("./palindromeNumber.js");

test("should first", () => {
  expect(isPalindrome(121)).toBe(true);
});

test("should second", () => {
  expect(isPalindrome(-121)).toBe(false);
});

test("should third", () => {
  expect(isPalindrome(10)).toBe(false);
});
