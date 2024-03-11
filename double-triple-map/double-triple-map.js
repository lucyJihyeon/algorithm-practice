// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element


//first solution using for-loop
//On
var doubleTripleMap = function(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++)    {
        if (Math.abs(arr[i]) % 2 == 0)    {
            newArr.push(arr[i] * 2);
        } else {
            newArr.push(arr[i] * 3);
        }
    }
    return newArr;
};

//second solution using map 
//On 
var doubleTripleMap = function(arr) {
    let newArr = arr.map((num) => num % 2 == 0 ? num * 2 : num * 3)
    return newArr;
}


