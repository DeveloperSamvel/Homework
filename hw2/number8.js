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
   

const filterUsers = (users) => {
    return users.filter(({lang}) => lang !== "ru");
}
console.log(filterUsers(users));