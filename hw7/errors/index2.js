const isPositive = (a) => {
  if (typeof a !== "number") {
    return null;
  }

  if (a > 0) {
    return "YES";
  }

  if (a === 0) {
    throw new Error("Zero Error");
  }

  throw new Error("Negative Error");
};

try {
  console.log(isPositive(-95));
} catch (error) {
  console.log(error.message);
}
