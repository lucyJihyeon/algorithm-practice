// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    // let i = 0; 
    // let j = 0;
    // while (i <= arrA.length && j <= arrB.length)    {
    //     if (arrA[i] == arrB[j]){
    //         return arrA[i]
    //     } else {

    //     }
    // }
    for ( let i =0; i < arrA.length; i++)   {
        for (let j = 0; j < arrB.length; j++)   {
            let firstElement = arrA[i];
            let secondElement = arrB[j];
            if (firstElement == secondElement)  {
                return firstElement
            } 
        }
    }
};
