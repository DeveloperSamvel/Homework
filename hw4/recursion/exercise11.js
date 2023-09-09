const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  if (a > 0 && b > 0) {
    return gcd(b, a % b);
  } else {
    throw new Error("Please provide two positive numbers");
  }
};

console.log(gcd(18, 7)); // Output: 6
