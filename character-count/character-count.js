// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  var smStr = str.toLowercase();
  var char = smStr.split("");
  var charMap = {};
  for (var i = 0; i < char.length; i++) {
    var count = 0;
    for (var j = 0; j < char.length; j++) {
      if (char[i] === char[j]) {
        count += 1;
      } 
    }
    charMap[char[i]] = count;
  }
  return charMap;
};
characterCount("Hello World");