const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

const memoize = (fn) => {
  const cache = [];
  return function (n) {
    if (cache[n] !== undefined) {
      return `${cache[n]} (cached)`;
    } else {
      cache[n] = fn(n);
      return `${cache[n]} (calculated)`;
    }
  };
};

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)
