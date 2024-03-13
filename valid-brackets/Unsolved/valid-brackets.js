// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

//first solution
// const validBrackets = function (str) {
//   strArr = str.replace(/\s+/g, "").split("");
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] == "(" && strArr[i + 1] == ")") {
//       return true;
//     } else if (strArr[i] == "{" && strArr[i + 1] == "}"){
//         return true;
//     } else if (strArr[i] == "[" && strArr[i + 1] == "]"){
//         return true;
//     }
//   }
//   return false;
// };

//second solution 
const validBrackets = function(str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < str.length; i++) {
        // If the character is an opening bracket, push to stack
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(str[i]);
        }
        // If the character is a closing bracket
        else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
            let last = stack.pop();
            console.log(last);
            // Check if the closing bracket matches the top of the stack
            if (map[last] !== str[i]) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are properly closed
    return stack.length === 0;
}