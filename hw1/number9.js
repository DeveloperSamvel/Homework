"use strict"

function cleanPhoneNumber(phone) {
    phone = phone.replace(/\s+/g, '');

    if (phone.length < 10 || phone.length > 11) {
        return "Bad number";
    }

    if (phone.length === 11) {
        if (phone[0] === "+") {
            return phone.slice(1);
        }
    
        return "Bad number";
    }

    if (phone.split("+").length - 1) {
        return "Bad number";
    }

    return phone;
}

let result = cleanPhoneNumber("455678");
console.log(result);

result = cleanPhoneNumber("339 5656888");
console.log(result);

result = cleanPhoneNumber("+0008989562");
console.log(result);

result = cleanPhoneNumber("45231489562");
console.log(result);

result = cleanPhoneNumber("123+2356897452");
console.log(result);