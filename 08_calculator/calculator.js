const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce(function(acc, curr) {
    return acc * curr;
  }, 1);
};

const power = function(a, b) {
	let answer = a
  for (let i = b-1; i > 0; i--) {
    answer *= a;
  };
  return answer;
};

const factorial = function(a) {
	let answer = 1
  for (let i = 1; i <= a; i++) {
    answer *= i;
  };
  return answer;
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
