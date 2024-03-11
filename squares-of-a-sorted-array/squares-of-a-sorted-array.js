// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order


//first solution using for-loop and sort
var sortedSquares = function(arr) {
    let squareArr = [];
    for ( let i = 0;i < arr.length; i ++)   {
        squareArr.push(arr[i] * arr[i]);
    }
    squareArr.sort((a,b) => a - b);
    return squareArr;
};

//second solution using map and sort
var sortedSquares = function(arr)   {
    let squareArr = arr.map((num) => num * num);
    return squareArr.sort((a,b) => a - b);
}


// O(n log n).