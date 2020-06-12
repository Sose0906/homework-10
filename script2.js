/*
Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and
return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the
balance, if amount is less than the balance, otherwise output “Amount exceeded
balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the
amount from the account balance and add it to the given anotherAccount and return the
updated balance, if amount is less than the balance, otherwise output “Amount
exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which
gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method.
 */

class Account {
    static #statikId = 0;
    #id;

    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
        Account.#statikId++;
        this.#id = Account.#statikId
    }

    get name() {
        return this._name;
    }

    set name(value) {

        this._name = value;
    }


    get balance() {
        return this._balance;
    }

    set balance(value) {
        if (typeof (value) != 'number') {
            throw new Error('Balance must be a number');
        }

        this._balance = value;
    }

    get id() {
        return this.#id;
    }

    credit(amount) {
        if (typeof (amount) != 'number') {
            throw new Error('Amount must be a number');
        }
        this._balance += amount;
        return this._balance;

    }

    debit(amount) {
        if (typeof (amount) != 'number') {
            throw new Error('Amount must be a number');
        } else if (amount > this._balance) {
            throw new Error('Amount must be less than balance');
        }
        this._balance -= amount;
    }

    toString() {
        return `id:${this.id}, name:${this.name}, balance:${this.balance}`;
    }

    transferTo(anotherAccount, amount) {

        if (anotherAccount instanceof Account) {
            if (typeof (amount) != 'number') {
                throw new Error('Amount must be a number');
            }
            this.debit(amount);
            this.credit.call(anotherAccount, amount)
        } else {
            throw new Error('anotherAccount must be instance of Account class');

        }

    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst instanceof Account && accountSecond instanceof Account) {
            return accountFirst.toString() === accountSecond.toString();
        }
        throw new Error('accounts must be instance of Account class');


    }


}
