"use strict"

const users = [
    {
        name: "John Doe",
        age: 30,
        isAdmin: false,
    },
    {
        name: "Jane Smith",
        age: 25,
        isAdmin: true,
    },
    {
        name: "Bob Johnson",
        age: 40,
        isAdmin: false,
    },
];
   
function getAverageAge(users) {
    let totalAge = 0;
    for (let i = 0; i < users.length; i++) {
        let element = users[i] && users[i].age || 0;
        totalAge += element;
    }

    return Math.floor(totalAge / users.length);
}
   
const result = getAverageAge(users);
console.log(result);