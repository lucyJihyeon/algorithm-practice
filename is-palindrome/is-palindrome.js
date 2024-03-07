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
