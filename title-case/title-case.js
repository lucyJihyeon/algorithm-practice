// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  const newStr = str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substring(1))
    .join(" ");
    return newStr;
};

