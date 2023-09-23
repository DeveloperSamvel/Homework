const clone = (obj) => {
  console.log(
    "Object.getOwnPropertyDescriptors(obj)",
    Object.getOwnPropertyDescriptors(obj)
  );
  return Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
};

const person = {
  firstName: "Sam",
  lastName: "Vardanyan",
  city: "Masis",
  age: 26,
};

let result = clone(person);
console.log(result);
