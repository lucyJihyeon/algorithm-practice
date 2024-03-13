// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function (nums) {
  //1.sort the array
  //2. from the start, check the frequency
  //3.if the frequency is more than 1,
  //4.increment until the frequency is 1

  // 1. Sort the array
  const sortedNums = nums.sort((a, b) => a - b);
  let increment = 0;

  // 2. Iterate through the sorted array
  for (let i = 1; i < sortedNums.length; i++) {
    // 3. If the current number is less than or equal to the previous one, increment it
    if (sortedNums[i] <= sortedNums[i - 1]) {
      // Calculate the difference needed to make the current number unique
      const diff = sortedNums[i - 1] - sortedNums[i] + 1;
      sortedNums[i] += diff; // Increment the current number to make it unique
      increment += diff; // Update the total increments
    }
  }

  return increment;
};
