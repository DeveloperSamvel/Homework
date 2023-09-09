function createCounter() {
  let var_counter = 0;
  return function () {
    return ++var_counter;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
