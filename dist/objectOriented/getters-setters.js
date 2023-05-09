"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.name = name;
        this.id = id;
        this._balance = balance;
    }
    getTestBalance() {
        return this._balance;
    }
    get seeBalance() {
        return this._balance;
    }
    // getter
    get balance() {
        return this._balance;
    }
    // setter
    set depositBalance(newbalance) {
        this._balance += newbalance;
    }
    getBalance() {
        return `My current balance is ${this._balance}`;
    }
}
class StudentAccount extends BankAccount {
    test() {
        this.seeBalance;
    }
}
const myAaccount = new BankAccount(101, "Asad", 55);
// myAaccount.addDeposit(20)
console.log(myAaccount.depositBalance = 20);
console.log(myAaccount.balance);
