const removeDuplicates = require('./removeDuplicates.js');

test('should first', () => {

    expect(removeDuplicates([1, 1, 2])).toBe(2);
})

test('should second', () => {

    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
})