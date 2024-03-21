// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:

//first solution 
var smallestDifference = function (arr1, arr2) {
    let Smdifference = Number.MAX_SAFE_INTEGER;
    let arr1Num;
    let arr2Num
    for (let i = 0; i < arr1.length; i++)   {
        for (let j = 0; j < arr2.length; j++)   {
            let difference = Math.abs(arr1[i] - arr2[j]);
            if (difference < Smdifference)  {
                Smdifference = difference;
                arr1Num = arr1[i];
                arr2Num = arr2[j];
            } 
        }
    }
    return [arr1Num, arr2Num]
};

//second solution 
var smallestDifference = function(arr1, arr2) {
    arr1.sort((a, b) => a - b); // Sort the arrays in ascending order
    arr2.sort((a, b) => a - b);

    let minDifference = Number.MAX_SAFE_INTEGER;
    let pair = [];

    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    while (i < arr1.length && j < arr2.length) {
        let difference = Math.abs(arr1[i] - arr2[j]);

        if (difference < minDifference) {
            minDifference = difference;
            pair = [arr1[i], arr2[j]];
        }

        // Move the pointer of the array with the smaller value
        if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return pair;
};
