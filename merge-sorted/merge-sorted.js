// Write code to merge two sorted arrays into a new sorted array

//because the purpose of this function is to compare two sorted arrays and merge them into a new sorted array, 
//it serves as merge function in merge sort 
//O(n) 
var mergeSorted = function (arr1, arr2) {
    let result = [], i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
};


//regular merge sort 
//O(n log n)
//n (arr.length) and split the array into halves until the length is 1 > log n 
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result
}
