const validateObject = (user, schema) => {
  if (Object.keys(user).length === Object.keys(schema).length) {
    for (item in user) {
      if (!(item in schema)) {
        return false;
      }

      const { writable, validate } = schema[item];

      if (!validate(user[item])) {
        return false;
      }

      if (!writable) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const schema = {
  name: {
    value: "",
    writable: true,
    validate: (value) => typeof value === "string",
  },
  age: {
    value: 0,
    writable: true,
    validate: (value) => typeof value === "number" && value >= 18,
  },
};

const user = {
  name: "Sam",
  age: 25,
};

const user2 = {
  name: "Ann",
  age: "18",
};

const user3 = {
  name: "Alex",
  age: 17,
};

const user4 = {};

Object.defineProperties(user4, {
  name: {
    value: "Alex",
    writable: true,
  },
  age: {
    value: 37,
    writable: false,
  },
});

console.log(validateObject(user, schema));
console.log(validateObject(user2, schema));
console.log(validateObject(user3, schema));
console.log(validateObject(user4, schema));
