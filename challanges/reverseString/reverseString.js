
/**
 * 
 * @param {string} str 
 * @returns reverse str
 */
function reverse(str) {

    return str.split("").reduce((rev, c) => c + rev, "")
}

module.exports = reverse;