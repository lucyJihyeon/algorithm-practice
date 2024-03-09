// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string


//first solution (On^2)
var characterCount = function (str) {
  const words = str.split("");
  let characterCount = {};
  for (let i = 0; i < words.length; i++) {
    let count = 0;
   for ( let j = 0; j < words.length; j++) {
    if (words[i] == words[j]){
      count++;
    }
   }
   characterCount[words[i]] = count;
  }
  console.log(characterCount);
  return characterCount;
};

//second solution (On)
var characterCount = function (str) {
let characterCount = {};
const words = str.split("");
for (let i = 0; i < words.length; i++)  {
  let char = words[i];
  if (characterCount[char]){
    characterCount[char]++;
  } else {
    characterCount[char] = 1;
  }
}
return characterCount;
}
//clean-up
function characterCount(str) {
  let characterCount = {};
  for (let char of str) {
    characterCount[char] = (characterCount[char] || 0) + 1;
  }
  return characterCount;
}
