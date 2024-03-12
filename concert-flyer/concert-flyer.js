// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

//first solution 
var concertFlyer = function (magazine, flyer) {
  const magazineWords = magazine.split(" ");
  const flyerWords = flyer.split(" ");
  let count = 0;
  for (let i = 0; i < flyerWords.length; i++) {
    if (magazineWords.includes(flyerWords[i])) {
      count++;
    }
  }
  return count == flyerWords.length;
};


//second solution using frequency map 
var concertFlyer = function (magazine, flyer) {
  //split the sentence by word 
  const magazineWords = magazine.toLowerCase().split(" ");
  const flyerWords = flyer.toLowerCase().split(" ");
  const magazineFreq = {};
  const flyerFreq = {};

  // Build a frequency map for magazine words
  for (const word of magazineWords) {
    if (magazineFreq[word]) {
      magazineFreq[word]++;
    } else {
      magazineFreq[word] = 1;
    }
  }

  // Build a frequency map for flyer words
  for (const word of flyerWords) {
    if (flyerFreq[word]) {
      flyerFreq[word]++;
    } else {
      flyerFreq[word] = 1;
    }
  }

  // Check if each word in the flyer is present in the magazine with correct frequency
  //Object.entries(flyerFreq) returns an array of entries, with each entry being an array itself, structured as [key, value]. In this case, [word, count] 
  for (const [word, count] of Object.entries(flyerFreq)) {
    if (!magazineFreq[word] || magazineFreq[word] < count) {
      return false;
    }
  }

  return true;
};

