"use strict"

// function checkPassword(password) {
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@]).{6,16}$/;
    
    // if (regex.test(password)) {
    //     return "Valid";
    // } else {
    //     return "Invalid";
    // }
// }

function checkPassword(password) {
    let capitalLetter = false;
    let smallLetter = false;
    let characters = false;
    let number = false;
    
    if(password.length >= 6 && password.length <= 16) {
        for(let i = 0; i < password.length; i++) {
            let elem = password[i];
    
            if (elem >= 'a' && elem <= 'z' && !smallLetter) {
                smallLetter = true;
            }
            else if (elem >= 'A' && elem <= 'Z' && !capitalLetter) {
                capitalLetter = true;
            }
            else if (elem >= '0' && elem <= '9' && !number) {
                number = true;
            }
            else if (elem === "$" || elem === "@" || elem === "#") {
                characters = true;
            }

            if(characters && number && capitalLetter && smallLetter) {
                return "Valid";
            }
        }
    }

    return "Invalid";
}

let result = checkPassword("12asdf");
console.log(result);

result = checkPassword("Aaza1234566#");
console.log(result);