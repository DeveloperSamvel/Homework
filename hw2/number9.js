"use strict"

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];
   

const filterByField = (users, field) => {
    let arr = [];

    arr = users.filter(item => item.isAstronaut);
    return arr;
}
console.log(filterByField(users, "isAstronaut"));