const sumAll = function(num1, num2) {
    // Make sure the numbers are non-zero ints 

    // Attempt 1: does not work because it breaks if num1 is bigger than num2
    // if (num1 < 0 || num2 < 0) {
    //     return 'Error';
    // }
    // let sum = 0; 
    // for (let i = num1; i <= num2; i++) {
    //     sum += i;
    // }
    // return sum;

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    // Get the lowest number from num1 and num2
    if (num1 > num2) {
        const placeholder = num1;
        num1 = num2; 
        num2 = placeholder;
    }

    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
