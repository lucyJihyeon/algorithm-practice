// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    const strArr = str.split("");
    const subArr = sub.split("");
    let count = 0;
    for (let i =0; i < subArr.length; i++)  {
        if (strArr.includes(subArr[i])) {
            count ++;
        }
    }
    return count == subArr.length
};
