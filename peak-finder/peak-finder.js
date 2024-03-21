// //first solution by sorting the array
const peakFinder = function (nums) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
  const sortedNums = nums.sort((a, b) => a - b);
  return sortedNums[sortedNums.length - 1];
};

//second solution
const peakFinder = function (nums) {
  // If the array is empty or has one element, return the element or undefined
  if (nums.length <= 1) return nums[0];

  // Check if the first or last element is a peak
  if (nums[0] > nums[1]) return nums[0];
  if (nums[nums.length - 1] > nums[nums.length - 2])
    return nums[nums.length - 1];

  // Check for a peak in the rest of the array
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return nums[i];
    }
  }
};

//third solution using binary search
const findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      // If the mid element is greater than the next element, the peak is in the left half
      right = mid;
    } else {
      // If the mid element is less than the next element, the peak is in the right half
      left = mid + 1;
    }
  }

  // When left == right, we have found the peak element
  return nums[left];
};
