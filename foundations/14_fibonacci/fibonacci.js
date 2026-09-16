const fibonacci = function(num) {
    // Handle edge cases first
    // Check if it is a string and convert to int
    if (typeof num === 'string') {
        num = parseInt(num);
    }
    // Check if it is a positive int 
    if (num < 0) return "OOPS";
    // Return 0 if num is 0
    if (num === 0) return 0;

    // Fibonacci: every number after the 2nd number is the SUM of the previous 2 numbers 
    // 1, 1, 2, 3, 5, 8, ...
    // Return 1 if the num is 1 or 2
    if (num === 1 || num === 2) {
        return 1;
    }

    // Need to track the two preceding numbers as we step forward 
    // positions 1 and 2 are both 1  
    let prevNum1 = 1;
    let prevNum2 = 1;
    let currentNum;

    // For any position 1 from 3 up to num, calculate currentNum = prevNum1 + prevNum2 
    // Shift trackers forward 
    // When the loop finishes, prevNum2 (or currentNum) is the returning output  
    for (let i = 3; i <= num; i++) {
        currentNum = prevNum1 + prevNum2;
        prevNum1 = prevNum2;
        prevNum2 = currentNum;
    }
    return currentNum;

    // Approach 2: RECURSIVE
    // fib(n) = fib(n-1) + fib(n-2)
    // return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
