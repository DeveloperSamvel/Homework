"use strict"

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];
   

const getAverageAge = (users) => {
    let sum = users.reduce((acc, el) => acc + el.age, 0);

    return sum / users.length;
}
console.log(getAverageAge(users));