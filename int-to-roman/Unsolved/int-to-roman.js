// Write a function that takes in an integer and returns it as a Roman numeral string
var intToRoman = function (num) {
    const lookup = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    return lookup.reduce((acc, [k, v]) => {
      acc += k.repeat(Math.floor(num / v));
      num = num % v;
      return acc;
    }, '');
  };
  
//   k represents the Roman numeral symbol.
//   v represents the integer value associated with that Roman numeral symbol.
// repeat meathod returns a new string by concatenating the specified string a given number of times.