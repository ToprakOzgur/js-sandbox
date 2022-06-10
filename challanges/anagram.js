//https://leetcode.com/problems/valid-anagram/
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (t.length !== s.length) return false;

    let map = {};

    for (const o of s) {
        map[o] = map[o] ? map[o] + 1 : 1;
    }

    for (const o of t) {
        if (!map[o])
            return false;

        map[o]--;
    }

    return true;
}

module.exports = isAnagram;