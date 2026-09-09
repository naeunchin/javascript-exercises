const reverseString = function(string) {
    let reversedString = '';

    // Approach 1 
    // let reversedString = string.split('').reverse().join('');

    // Approach 2
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
