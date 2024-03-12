// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
  let i = 0;
  const n = arr.length 
  while (i < n) {
    let tobeAdded = arr[arr.length - 1];
    console.log(tobeAdded);
    arr.pop();
    console.log("after pop: ", arr);
    arr.splice(i,0,tobeAdded);
    console.log("after splice: ", arr);
    i++;
  }
  return arr;
};
const arr = [1, 2, 3, 4, 5];
const result = reverseInPlace(arr);
console.log(result);
