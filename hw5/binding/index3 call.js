function myCall(obj, ...props) {
  obj.customCall = this;
  obj.customCall(...props);

  delete obj["customCall"];
}

function f(age, country) {
  console.log(
    `Hello, my name is ${this.name}, I am ${age} years old and I live in ${country}.`
  );
}

Function.prototype.myCall = myCall;

const person = {
  name: "Samvel",
};

f.myCall(person, 26, "Armenia");
