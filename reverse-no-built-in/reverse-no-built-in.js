// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    let newStr = [];
    let strArr = str.split("");
    for ( let i = strArr.length - 1; i >= 0; i--)    {
        newStr.push(strArr[i])
    }
    return newStr.join("");
};
const str = 'Hello World!';

const result = reverse(str);

console.log(result);
console.log("?? 왜안댕");