const fibonacci = (n) => {
  if (n < 0) {
    throw new Error("Fibonacci sequence is not defined for negative numbers");
  } else if (n > -1 && n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(7)); // Output: 13
