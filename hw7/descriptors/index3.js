function Immutable(obj) {
  return Object.freeze(obj);
}

const person = new Immutable({
  firstName: "Sam",
  lastName: "Vardanyan",
  city: "Masis",
  age: 26,
});

try {
  console.log(person);
  person.firstName = "John";
  console.log(person);
} catch (error) {
  console.log(error.message);
}

console.log(person.firstName);
console.log(person.lastName);

// class Immutable {
//   constructor(obj) {
//     this._firstName = obj.firstName;
//     this._lastName = obj.lastName;
//     this._city = obj.city;
//     this._age = obj.age;
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get city() {
//     return this._city;
//   }

//   get age() {
//     return this._age;
//   }

//   set firstName(value) {
//     throw new Error("Cannot change immutable property");
//   }

//   set lastName(value) {
//     throw new Error("Cannot change immutable property");
//   }

//   set city(value) {
//     throw new Error("Cannot change immutable property");
//   }

//   set age(value) {
//     throw new Error("Cannot change immutable property");
//   }
// }

// const person = new Immutable({
//   firstName: "Sam",
//   lastName: "Vardanyan",
//   city: "Masis",
//   age: 26,
// });

// try {
//   console.log(person);
//   // person.firstName = "John";
//   person.otherProperty = "otherValue";
//   console.log(person);
//   console.log("person.otherProperty", person.otherProperty);
// } catch (error) {
//   console.log(error.message);
// }

// console.log(person.firstName);
// console.log(person.lastName);
