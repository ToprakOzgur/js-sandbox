function persistence(num) {

    if (num < 10) return 0;

    let digits = String(num).split('').map(Number);
    let multiply = digits.reduce((acc, curr) => acc * curr);

    let count = 1;
    while (multiply >= 10) {
        count++;
        num = multiply;
        digits = String(num).split('').map(Number);
        multiply = digits.reduce((acc, curr) => acc * curr);
    }
    return count;

}


console.log(persistence(999));
module.exports = persistence;