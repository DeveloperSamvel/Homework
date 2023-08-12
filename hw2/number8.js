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
    let arr = [];

    arr = users.filter(item => item.lang !== "ru");
    return arr;
}
console.log(filterUsers(users));