function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  if (!this.tank) {
    this.tank = 0;
  }
  if (!this.odometer) {
    this.odometer = 0;
  }
  this.fill = function (gallons) {
    this.tank += gallons;
  };
  this.drive = function (distance) {
    if (this.tank * this.milesPerGallon < distance) {
      this.odometer += this.tank * this.milesPerGallon;
      this.tank = 0;
      return `Iran out of fuel at ${this.odometer} miles!`;
    } else {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
      return `odometer - ${this.odometer}, tank - ${this.tank} gallons,`;
    }
  };
}

const car1 = new Car("Toyota", 40);
// console.log(car1);
car1.fill(10);
// console.log(car1.tank);
console.log(car1.drive(80));
console.log(car1.drive(80));
console.log(car1.drive(100));
console.log(car1.drive(80));
console.log(car1.drive(80));
