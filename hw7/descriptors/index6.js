const validateObject = (user, schema) => {
  if (Object.keys(user).length === Object.keys(schema).length) {
    for (item in user) {
      if (!(item in schema)) {
        return false;
      }

      if (!schema[item].validate(user[item])) {
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

console.log(validateObject(user, schema));
console.log(validateObject(user2, schema));
