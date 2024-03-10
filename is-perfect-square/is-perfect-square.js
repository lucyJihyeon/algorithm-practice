// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function (num) {
  let numbers = [];
  if (num < 0) {
    return false;
  }
  for (let i = 0; i <= num; i++) {
    numbers.push(i);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] * numbers[i] === num) {
      return true;
    }
  }
  return false;
};

//binary search method
var isPerfectSquare = function (num) {
  if (num < 2) return true;

  let left = 2,
    right = num / 2,
    mid,
    guessSquared;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    guessSquared = mid * mid;

    if (guessSquared == num) {
      return true;
    }

    if (guessSquared > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

//third solution : newton's method 

var isPerfectSquare = function(num) {
    if (num < 2) return true;
//Start with an initial guess 
// x=num. For most cases, choosing 
// x as num itself provides a reasonable starting point.
    let x = num;
    while (x * x > num) {
        x = Math.floor((x + num / x) / 2);
    }

    return x * x === num;
};

