// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function (digits) {
  
  let number = "";
  for (let i = 0; i < digits.length; i++) {
    number += digits[i];
  }
  if (digits.length < 1) {
    digits.push(1);
  }

  let newNum = parseInt(number) + 1;
  if (newNum > 1) {
    let newNumSt = newNum.toString();
    for (let i = 0; i < newNumSt.length; i++) {
      console.log(newNumSt[i]);
      digits[i] = parseInt(newNumSt[i]);
    }
  }
  console.log(digits);

  return digits;
};


var plusOne = function (digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    carry = Math.floor(sum / 10);
    digits[i] = sum % 10;
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
};
