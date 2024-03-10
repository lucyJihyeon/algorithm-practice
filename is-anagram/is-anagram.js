// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

// var isAnagram = function (strA, strB) {
//   const strAChar = strA
//     .replace(/\s/g, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");
//   const strBChar = strB
//     .replace(/\s/g, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");

//   return strAChar === strBChar;
// };

var isAnagram = function (strA, strB) {
  // Check if the lengths are different
  if (strA.length !== strB.length) {
    return false;
  }

  // Remove spaces and convert to lowercase
  const cleanedStrA = strA.replace(/\s/g, "").toLowerCase();
  const cleanedStrB = strB.replace(/\s/g, "").toLowerCase();

  // Create objects to store character frequencies
  var strAObj = {};
  var strBObj = {};

  // Populate frequency objects
  //This step is essential because it maps out the exact composition of each string in terms of its characters and their frequencies.
  for (var i = 0; i < cleanedStrA.length; i++) {
    var strALetter = cleanedStrA[i];
    var strBLetter = cleanedStrB[i];

    strAObj[strALetter] = (strAObj[strALetter] || 0) + 1;
    strBObj[strBLetter] = (strBObj[strBLetter] || 0) + 1;
  }
 console.log(strAObj, strBObj);
  // Compare frequency objects
  // if they have a diff key : return false
  // if the key's frequency is diff: return false
  for (let key in strAObj) {
    if (strAObj[key] !== strBObj[key]) {
      return false;
    }
  }

  return true;
};

