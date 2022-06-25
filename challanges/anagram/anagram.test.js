const anagram = require("./anagram.js");


test('should first', () => {
    expect(anagram("anagram", "nagaram")).toBe(true);
})

test('should first', () => {
    expect(anagram("rat", "car")).toBe(false);
})

test('should first', () => {
    expect(anagram("", "")).toBe(true);
})
test('should first', () => {
    expect(anagram("a", "")).toBe(false);
})

test('should first', () => {
    expect(anagram("", "a")).toBe(false);
})
test('should first', () => {
    expect(anagram("a", "a")).toBe(true);
})

test('should first', () => {
    expect(anagram("a", "b")).toBe(false);
})
test('should first', () => {
    expect(anagram("b", "a")).toBe(false);
})
test('should first', () => {
    expect(anagram("a", "aa")).toBe(false);
})
test('should first', () => {
    expect(anagram("aa", "a")).toBe(false);
})
