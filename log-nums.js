// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
    for (let i = 1; i < num + 1; i ++)  {
        console.log(i);
    }
    
};


//original attempt : 
// var logNums = function(num)  {
//   let numbers = [];
//   for (let i = 1; i < num +1; i++)  {
//         numbers.push(i)
//   }
//   return numbers;


  // the test expects the function to log each number individually, 
  //but the current implementation logs them as a single array. 
  //To fix this, I should modify the function to log each number on its own
  //rather than pushing all numbers into an array and logging that array. 
