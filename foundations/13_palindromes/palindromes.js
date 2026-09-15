const palindromes = function (string) {
    // Split the string into an array of characters, remove non-chars, and convert to lowercase
    let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Approach 1: Use nested loops to compare characters from the start and end of the array? Return true or false 
    let left = 0;
    let right = cleanString.length - 1;

    while (left < right) {
        if (cleanString[left] !== cleanString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

    // Approach 2: Use reverse() method to reverse the array, true or false 
    // let reversedString = cleanString.split('').reverse().join('');
    // return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
