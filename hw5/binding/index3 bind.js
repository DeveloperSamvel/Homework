function myBind(obj, props) {
  obj.customCall = () => {
    return this(...props);
  };

  return obj.customCall;
}

function f(age, country) {
  return `Hello, my name is ${this.name}, I am ${age} years old and I live in ${country}.`;
}

Function.prototype.myBind = myBind;

const person = {
  name: "Samvel",
};

let result = f.myBind(person, [26, "Armenia"])();
console.log(result);
