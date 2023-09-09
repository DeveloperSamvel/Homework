const flattenObject = (obj) => {
  const result = {};
  const helper = (obj, path) => {
    for (let key in obj) {
      if (typeof obj[key] !== "object") {
        result[path + key] = obj[key];
      } else {
        helper(obj[key], path + key + ".");
      }
    }
  };
  helper(obj, "");
  return result;
};

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};
const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject); /* {
  "a": 1,
  "b.c": 2,
  "b.d.e": 3,
  "b.d.f": 4,
  "g": 5
 } */
