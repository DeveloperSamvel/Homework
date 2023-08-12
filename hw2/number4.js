"use strict"

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];
   

const getUserNames = (users) => {
    let arr = [];

    arr = users.map(item => item.username);
    return arr;
}
console.log(getUserNames(users));