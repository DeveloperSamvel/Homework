function myCall(obj, ...props) {
  obj.customCall = this;
  return obj.customCall(...props);
}

function f(age, country) {
  return `Hello, my name is ${this.name}, I am ${age} years old and I live in ${country}.`;
}

Function.prototype.myCall = myCall;

const person = {
  name: "Samvel",
};

let result = f.myCall(person, 26, "Armenia");
console.log(result);
