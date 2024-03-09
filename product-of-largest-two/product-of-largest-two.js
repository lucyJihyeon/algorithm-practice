// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    // let sortedArr = arr.sort((a,b) => b -a);
    // return sortedArr[0] * sortedArr[1]
    
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; 
            largest = arr[i]; 
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return largest * secondLargest;

};

