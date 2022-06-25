const intersect = require('./IntersectionOfArrays');

test('should first', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);

});
test('should second', () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);

});
