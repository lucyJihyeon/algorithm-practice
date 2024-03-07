// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  const newStr = str.split(" ");
  let words = [];
  for (let i =0; i < newStr.length; i++)  {
    const word = newStr[i].substring(0,1).toUpperCase() + newStr[i].substring(1);
    words.push(word);
  }
  return words.join(" ");
};

//time complexity = O(n)
