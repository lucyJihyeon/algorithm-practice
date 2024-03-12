// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  let i = 0;
  while (i < positions) {
    let tobeAdded = arr[0];
    arr.splice(0, 1);
    arr.push(tobeAdded);
    i++;
  }
  return arr;
};
//second solution using shift()
const leftRotation = (arr, positions) => {
  let i = 0;
  while (i < positions) {
    let tobeAdded = arr.shift(); // Directly removes the first element and returns it
    arr.push(tobeAdded); // Adds the removed element to the end
    i++;
  }
};
