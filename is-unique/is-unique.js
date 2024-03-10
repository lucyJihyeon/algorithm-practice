// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    //first solution. On^2
    // for (let i = 0; i < arr.length; i++)    {
    //     let currentNum = arr[i]
    //     for (let j = i+1; j<arr.length; j++)  {
    //         if (currentNum == arr[j])   {
    //             return false;
    //         }
    //     }
    // }
    // return true;

    //second solution using object On
    let obj = {};
    for (let i =0; i <arr.length; i++)  {
        let currenNum = arr[i]
        if(obj[currenNum] == true)  {
            return false;
        }
        else {
            obj[currenNum] = true;
        }
    }
    return true;
};



