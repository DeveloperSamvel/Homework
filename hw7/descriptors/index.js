const obj = {
  get name() {
    return this._name;
  },
  set name(name) {
    let arr = name.split(",");
    this._name = arr.map((item) => [item, item.length]);
  },
};
obj.name = "Hamlet, Artavazd";
console.log(obj.name); // [['Hamlet', 6], ['Artavazd', 8]]
