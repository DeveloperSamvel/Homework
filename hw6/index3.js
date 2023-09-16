function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = function (food) {
    if (this.stomach.length < 10) {
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

const person = new Person("Samvel", 26);
console.log(person.toString());
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
person.poop();
console.log(person.stomach);
