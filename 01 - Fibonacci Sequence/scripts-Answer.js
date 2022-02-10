// 01 - Fibonacci Sequence

function fibonacci(position, memo) {
  memo = memo || {};

  if (memo[position]) return memo[position];

  if (position === 0) {
    return 0;
  } else if (position < 3) {
    return 1;
  }
  return (memo[position] =
    fibonacci(position - 1, memo) + fibonacci(position - 2, memo));
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(45));
