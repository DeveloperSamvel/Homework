function Person(name, age, stomachLength) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = function (food) {
    let length = stomachLength || 10;
    if (this.stomach.length < length) {
      this.stomach.push(food);
    }
  };
  this.poop = function () {
    this.stomach = [];
  };
  this.toString = function () {
    return `${this.name}, ${this.age}`;
  };
}

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age, 3);
  this.favoriteToy = favoriteToy;
  this.play = function () {
    return `Playing with ${this.favoriteToy}`;
  };
}

const person = new Person("Samvel", 26);
const baby = new Baby("John", 6, "ball");

console.log(baby.toString());
console.log(baby.play());

person.eat("apple");
person.eat("banana");
person.eat("orange");
person.eat("kiwi");
person.eat("peach");
person.eat("apricot");
person.eat("plum");
person.eat("pear");
person.eat("grape");
person.eat("melon");
person.eat("watermelon");

console.log(person.stomach);

baby.eat("apple");
baby.eat("banana");
baby.eat("orange");
baby.eat("kiwi");

console.log(baby.stomach);

baby.poop();
console.log(baby.stomach);
console.log(baby.play());
