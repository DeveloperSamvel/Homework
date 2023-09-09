const add = (a, b, c) => {
  return a + b + c;
};

const curry = (fn) => {
  return function curred(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curred(...args, ...newArgs);
      };
    }
  };
};

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
