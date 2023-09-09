const add = (...props) => {
  return props.reduce((acc, item) => acc + item, 0);
};

const partial = (fn, ...props) => {
  return (...rest) => {
    return fn(...props, ...rest);
  };
};
const add5 = partial(add, 3);
console.log(add5(7, 13)); // Output: 23 (3 + 7 + 13)
