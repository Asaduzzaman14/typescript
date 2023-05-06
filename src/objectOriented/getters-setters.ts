class BankAccount {
    id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {

        this.name = name;
        this.id = id;
        this._balance = balance
    }

    get balance(): number {
        return this._balance
    }
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

    // test(){
    //     this.
    // }

}

const myAaccount = new BankAccount(101, "Asad", 55)
// myAaccount.addDeposit(20)

console.log(myAaccount.depositBalance = 20);
console.log(myAaccount.balance);

