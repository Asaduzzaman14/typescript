class BankAccount {
    id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {

        this.name = name;
        this.id = id;
        this._balance = balance
    }

    private getTestBalance(): number {
        return this._balance
    }
    get seeBalance(): number {
        return this._balance
    }

    // getter
    get balance(): number {
        return this._balance
    }
    // setter
    set depositBalance(newbalance: number) {
        this._balance += newbalance
    }

    getBalance(): string {
        return `My current balance is ${this._balance}`

    }

    // addDeposit(amount: number) {
    //     this._balance += amount
    // }
}
class StudentAccount extends BankAccount {

    test() {
        this.seeBalance
    }

}

const myAaccount = new BankAccount(101, "Asad", 55)
// myAaccount.addDeposit(20)

console.log(myAaccount.depositBalance = 20);
console.log(myAaccount.balance);

