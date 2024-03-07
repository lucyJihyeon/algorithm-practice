// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    const strArr = str.split("");
    const newStr =[];
    for (var i = strArr.length -1; i >= 0; i --)    {
        newStr.push(strArr[i]);
    }
    console.log(strArr, newStr);
    return strArr.join('') === newStr.join('');
};

//because they are two separate objects stored in different locations in memory.
// using join('') to convert both arrays into strings, 
//you're effectively comparing their contents as a single value (a string), 
//not their references. When two strings are compared in JavaScript, 
//the comparison checks their actual sequence of characters to determine if they are equal.

