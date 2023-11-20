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
    return users.filter(item => item[field]);
}
console.log(filterByField(users, "isAstronaut"));