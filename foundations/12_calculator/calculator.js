const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;

  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};

const multiply = function(numArray) {
  // Initialize to 1 because multiplying by 1 does not change the product. Initializing to 0 will lead to multiplication always returning 0.
  let product = 1;
  for (let i = 0; i < numArray.length; i++) {
    product *= numArray[i];
  }
  return product;
};

const power = function(base, exponent) {
	let power = base ** exponent;
  return power;
  // return base ** exponent;
};

const factorial = function(num) {
  // Factorial example: 
  // 5! = 5 * 4 * 3 * 2 * 1 = 120
	if (num < 0) return 'ERROR';
  // Start at 1 because factorial of 0 is 1 and we want to multiply by 1 for the first iteration
  // running accumulator for the factorial value
  let factorial = 1;

  // i is initialized to 1 because we want to multiply by 1 for the first iteration, and we want to include num in the multiplication (logical completeness for num = 1)
  // logical correctness for num = 0: if 1 <= 0, the loop stops 
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
