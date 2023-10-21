const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

class Account {
    #balance;
    constructor(name, balance) {
        this.id = uid();
        this.name = name;
        this.#balance = balance;
    }


    get balance () {
        return this.#balance;
    }

    set balance (newBalance) {
        this.#balance = newBalance;
    }

    credit (balance) {
        this.#balance += balance;
        return this.#balance;
    }

    debit (balance) {
        this.#balance -= balance;
        return this.#balance;
    }

    transferTo (user, balance) {
        this.debit(balance);
        user.credit(balance);
    }

    static identifyAccounts (...args) {
        return args.map((item) => item.id);
    }
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);
console.log(saving.credit(5000));
console.log(saving.debit(1000));
console.log(saving.debit(2000));
saving.transferTo(current, 1000);
console.log(saving.balance);
console.log(current.balance);
const res = Account.identifyAccounts(current, saving);
console.log(res);