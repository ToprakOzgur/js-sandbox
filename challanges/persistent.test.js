const persistence = require("./persistent.js");

test('should first', () => {
    expect(persistence(39)).toBe(4);

});
test('should first', () => {
    expect(persistence(4)).toBe(0);

});
test('should first', () => {
    expect(persistence(25)).toBe(2);

});
test('should first', () => {
    expect(persistence(999)).toBe(4);

});