const extend = (obj, descriptor) => {
  Object.defineProperties(obj, descriptor);

  return obj;
};

const descriptor = {
  prop2: { value: "value2", writable: false },
  prop3: {
    get() {
      return "value3";
    },
  },
};

const obj = { prop1: "value1" };
const extendedObj = extend(obj, descriptor);

console.log("extendedObj", extendedObj);
console.log("extendedObj.prop1", extendedObj.prop1);
console.log("extendedObj.prop2", extendedObj.prop2);
console.log("extendedObj.prop3", extendedObj.prop3);
