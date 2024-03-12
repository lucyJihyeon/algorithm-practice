// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  let i = 0;
  while (i < positions) {
    let tobeAdded = arr[0];
    console.log("tobeAdded: ",tobeAdded);
    arr.splice(0, 1);
    console.log("after splice: ",arr);
    arr.push(tobeAdded);
    console.log("after push: ",arr);
    i++;
  }
  return arr;
};
