const createPerson = (name, age) => {
  let _name = name;
  let _age = age;
  return {
    getName: function () {
      return _name;
    },
    getAge: function () {
      return _age;
    },
    setName: function (name) {
      _name = name;
    },
    setAge: function (age) {
      _age = age;
    },
  };
};

const person = createPerson("Alice", 30);
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30
person.setName("Bob");
person.setAge(25);
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25
