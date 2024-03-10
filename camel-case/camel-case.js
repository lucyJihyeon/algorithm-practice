// Write code to create a function that accepts a string and returns the string in camelCase

//first solution using for loop 
var camelCase = function(str) {
    const words = str.split(" ");
    const firstWord = words[0].substring(0).toLowerCase();
    let camelCase;
    let newWords = [];
    for (let i =1; i < words.length; i++)   {
        const upperCaseWord= words[i].substring(0,1).toUpperCase() + words[i].substring(1);
        newWords.push(upperCaseWord);
    }
    camelCase = firstWord + newWords.join("");
    return camelCase;
};

//(On)

//second solution using call back function (map) 
function camelCase(str) {
    // Trim the string to remove leading/trailing spaces and replace multiple spaces with a single space
    const words = str.trim().replace(/\s+/g, ' ').split(' ');
    return words.map((word, index) => {
        // Lowercase for the first word, capitalize the first letter for subsequent words
        if (index === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

//   /\s+/g is a regular expression that matches one or more (+) whitespace characters (\s). The whitespace characters include spaces, tabs, newlines, and other Unicode whitespace characters. The g at the end is a flag that stands for "global," meaning it will search for and replace all matches in the string, not just the first one.