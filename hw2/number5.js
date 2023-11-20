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
    return users.map(({username}) => username.length);
}
console.log(getUserNames(users));