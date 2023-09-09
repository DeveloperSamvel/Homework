const createCalculator = (action) => {
  return (...rest) => {
    return ((action, props) => {
      if (action === "add") {
        return props.reduce((acc, item) => acc + item, 0);
      }
      if (action === "multiply") {
        return props.reduce((acc, item) => acc * item, 1);
      }
    })(action, rest);
  };
};

const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8
const multiply = createCalculator("multiply");
console.log(multiply(6, 7, 2)); // Output: 84
