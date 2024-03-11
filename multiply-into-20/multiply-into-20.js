const multiplyInto20 = function(arr) {
  // TODO: Write Your Code Here
  //On^2 because of the includes method that loop through each of the items in the array.
  if (arr.length < 2) {
    return false
  }
  const target = 20;
  for (let i =0; i < arr.length; i++) {
    let neededNum = target / arr[i];
    if (target % neededNum == 0 && arr.includes(neededNum)) {
      return true
    }
  }
  return false;
};

//second solution 
//On
const multiplyInto20 = function(arr) {
  if (arr.length < 2) {
    return false;
  }
  //set ; each value in a Set can only occur once; it's a distinct element of that collection.
  //You can find the number of elements in a Set using its size property, similar to how you would use the length property for an array.
  //You can check if an element exists in a Set using the has() method, which returns true if the element is found and false otherwise.
  const seenNumbers = new Set();
  const target = 20;

  for (let i = 0; i < arr.length; i++) {
    const neededNum = target / arr[i];
    // If the needed number to multiply with the current number to get 20
    // has been seen in the array before, return true.
    if (seenNumbers.has(neededNum)) {
      return true;
    }
    // Add the current number to the set of seen numbers.
    seenNumbers.add(arr[i]);
  }

  return false;
};
