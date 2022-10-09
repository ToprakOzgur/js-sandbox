const reverse = require("./reverseString");

test('should first', () => {
    expect(reverse("123")).toBe("321");
})

test('should second', () => {
    expect(reverse("ozgur")).toBe("rugzo");
})