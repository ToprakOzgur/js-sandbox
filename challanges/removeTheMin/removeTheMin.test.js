const removeSmallest = require("./removeTheMin.js");

test('should first', () => {

    expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);

});

test('should first', () => {

    expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);

});
test('should first', () => {

    expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);

});

test('should first', () => {

    expect(removeSmallest([])).toEqual([]);

});

