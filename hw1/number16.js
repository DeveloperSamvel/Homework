"use strict"

const cars = [
    {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2023,
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2021,
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2023,
    },
    {
        make: "Chevrolet",
        model: "Silverado",
        year: 2022,
    },
    {
        make: "Toyota",
        model: "Rav4",
        year: 2023,
    }
];
   
function printCarsByMake(make) {
    let text = "";
    let newArr = [];

    for (let i = 0; i < cars.length; i++) {
        const element = cars[i];
        
        if(element.make === make) {
            newArr.push(element);
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        let car = newArr[i];
        text += `"Make: ${car.make}, Model: ${car.model}, Year: ${car.year}"`;

        if(i !== newArr.length) {
            text += ", ";
        }
    }

    return text;
}
   

const result = printCarsByMake("Toyota");
console.log(result);