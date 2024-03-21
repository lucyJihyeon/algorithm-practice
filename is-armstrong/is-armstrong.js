// Write a function that takes a positive integer and returns true if the integer is an armstrong number, 
// else return false. To find out if a number is an armstrong number, 
// take each individual digit and raise it to the power of the length of the entire number and add the digits. 
// If the sum equals the original number, the number is an armstrong number"

// TODO: Complete the function below:

//first solution. using for loop 
var isArmstrong = function(num) {
    const numArr = num.toString();
    const multiply = numArr.length;
    let sum =0;
    for (let i =0; i < numArr.length; i++)  {
        let numToAdd = parseInt(numArr[i]) ** multiply;
        sum += numToAdd;
    }
    return (sum === num)
};

//second solution using pow and floor 
function isArmstrong(num) {
    let originalNum = num;
    let sum = 0;
    const power = num.toString().length;
    //Math.pow(base, exponent): This function returns the base raised to the power of the exponent. For example, Math.pow(2, 3) returns 2 raised to the power of 3, which is 8.
    //Math.floor(x): This function returns the largest integer less than or equal to a given number x. It effectively rounds down a number to the nearest integer.
    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, power);
        num = Math.floor(num / 10);
    }
    return sum === originalNum;
}
