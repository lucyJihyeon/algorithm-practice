// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

//first solution 
const reverseInPlace = (arr) => {
  let i = 0;
  const n = arr.length 
  while (i < n) {
    let tobeAdded = arr[arr.length - 1];
    arr.pop();
    arr.splice(i,0,tobeAdded);
    i++;
  }
  return arr;
};

//second solution 
const reverseInPlace = (arr)  =>  {
  let left = 0; // Start from the first item
  let right = arr.length - 1; // Start from the last item

  while (left < right) {
    // Swap the elements at the left and right indexes
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move towards the center
    left++;
    right--;
  }

  return arr;
}