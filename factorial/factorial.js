// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
 let number = [];
 let factorial =1;
    for (let i = 2; i <= num; i ++)   {
        number.push(i);
    }
    console.log(number);
    for (let i =0; i < number.length; i++)  {
        factorial *= number[i];
    }
    return factorial
    
};
