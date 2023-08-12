"use strict"

const bankAccount = {
    accountNumber: "123456789",
    balance: 1000,
    accountHolder: "John Doe",
};

function deposit(money) {
    if(money < 0) {
        return "Invalid deposit amount. Please deposit a positive amount.";
    }

    bankAccount.balance += money;
    return `Deposited ${money}. New balance: ${bankAccount.balance}`;
}

function withdraw(money) {
    if(bankAccount.balance < money) {
        return "Insufficient balance or invalid withdrawal amount.";
    }

    bankAccount.balance -= money;
    return `Withdrew ${money}. New balance: ${bankAccount.balance}`;
}

function updateBalance(money, action) {
    if(action === "deposit") {
        return deposit(money);
    }

    if(action === "withdraw") {
        return withdraw(money)
    }
}

let result = updateBalance(500, "deposit");
console.log(result);

result = updateBalance(200, "withdraw");
console.log(result);

result = updateBalance(-100, "deposit");
console.log(result);

result = updateBalance(5000, "withdraw");
console.log(result);
