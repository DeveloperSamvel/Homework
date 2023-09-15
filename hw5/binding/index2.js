const Airplane = {
  isFlying: false,

  takeOff() {
    this.isFlying = true;
  },

  land() {
    this.isFlying = false;
  },
};

Airplane.takeOff();
console.log(Airplane.isFlying);

Airplane.land();
console.log(Airplane.isFlying);
