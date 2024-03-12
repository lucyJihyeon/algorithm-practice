// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false


// var permutationSubstring = function(str, sub) {
//     const strArr = str.split("");
//     const subArr = sub.split("");
//     let count = 0;
//     for (let i =0; i < subArr.length; i++)  {
//         if (strArr.includes(subArr[i])) {
//             count ++;
//         }
//     }
//     return count == subArr.length
// };

var permutationSubstring = function(str, sub)   {
    const strFrequency = {};
    const subFrequency = {};

    for ( let letter of str) {
        strFrequency[letter] = (strFrequency[letter] || 0) + 1;
    }
    for ( let letter of sub)    {
        subFrequency[letter] = (subFrequency[letter] || 0) + 1;
    }
    console.log("strFrequency: ", strFrequency, "stbFrequency: ", subFrequency);
    for ([letter, count] of Object.entries(subFrequency))   {
        if (!strFrequency[letter]){
            return false;
        } else if ( strFrequency[letter] < subFrequency[letter])    {
            return false;
        }
    }
    return true;
}