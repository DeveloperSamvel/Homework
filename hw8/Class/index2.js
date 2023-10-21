class Jungle {
    constructor (tigers = [], monkeys = [], snakes = [], fish = [], grain = [], meat = []) {
        this.tigers = tigers;
        this.monkeys = monkeys;
        this.snakes = snakes;
        this.fishes = fish;
        this.grains = grain;
        this.meats = meat;
    }

    add(element){
        if (element instanceof Tiger) {
            this.tigers = [...this.tigers, element];
        }
        else if (element instanceof Monkey) {
            this.monkeys = [...this.monkeys, element];
        }
        else if (element instanceof Snake) {
            this.snakes = [...this.snakes, element];
        }
        else if (element instanceof Fish) {
            this.fishes = [...this.fishes, element];
        }
        else if (element instanceof Grain) {
            this.grains = [...this.grains, element];
        }
        else if (element instanceof Meat) {
            this.meats = [...this.meats, element];
        }
    }

    soundOff () {
        for(let animal in this) {
            if (this[animal][0] instanceof Animal) {
                this[animal].forEach((element,index) => {
                    console.log(`${animal}${index + 1}: ${element.energy}`);
                });
            }
        }
    }
}

class Animal {
    constructor (energy = 24) {
        this.energy = energy;
    }

    sound () {
        if (this.energy >= 3) {
            this.energy -= 3;
        }
        else {
            this.energy = 0;
        }

        if(this instanceof Monkey) {
            this.energy -= 4;
        }
    }

    eat (elem) {
        if (this instanceof Tiger && elem instanceof Grain) {
            return "I can’t eat that";
        }

        this.energy += 5;
        if(this instanceof Monkey) {
            this.energy += 2;
        }
    }

    sleep () {
        this.energy += 10;

        if(this instanceof Tiger) {
            this.energy += 5;
        }
    }
}

class Tiger extends Animal {
    constructor () {
        super();
    }
}

class Monkey extends Animal {
    constructor () {
        super();
    }

    play() {
        if (this.energy >= 8) {
            this.energy -= 8;
            return "Oooo Oooo";
        }
        else {
            return "I'm too tired";
        }
    }
}

class Snake extends Animal {
    constructor () {
        super();
    }
}

class Food {
    constructor () {}
}

class Fish extends Food {
    constructor () {
        super();
    }
}

class Grain extends Food {
    constructor () {
        super();
    }
}

class Meat extends Food {
    constructor () {
        super();
    }
}

const tiger1 = new Tiger();
const monkey1 = new Monkey();
const snake1 = new Snake();
const tiger2 = new Tiger();
const monkey2 = new Monkey();
const snake2 = new Snake();

const jungle = new Jungle();

jungle.add(tiger1);
jungle.add(monkey1);
jungle.add(snake1);
jungle.add(tiger2);
jungle.add(monkey2);
jungle.add(snake2);

const fish = new Fish();
const grain = new Grain();
const meat = new Meat();

jungle.add(fish);
jungle.add(grain);
jungle.add(meat);


console.log(jungle);


tiger1.sound();
tiger1.eat(fish);
tiger1.eat(grain);
tiger1.eat(meat);
tiger1.sleep();

monkey1.sound();
monkey1.eat(fish);
monkey1.eat(grain);
monkey1.eat(meat);
monkey1.sleep();

snake1.sound();
snake1.eat(fish);
snake1.eat(grain);
snake1.eat(meat);
snake1.sleep();

console.log(monkey1.play());
console.log(monkey1.play());
console.log(monkey1.play());
console.log(monkey1.play());
console.log(monkey1.play());


console.log(jungle);
jungle.soundOff();