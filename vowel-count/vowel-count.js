// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strArr = str.toLowerCase.split("");
    let count =0;
    for (let i =0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])){
            count++;
        }
    }
    return count;
};
