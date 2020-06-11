/*
Create an Author class and a Book class.
Author should have: name, email, gender.
It should have appropriate getters and setters.
It should have a toString method.
Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on
the price and quantity.
It should have a toString method.
 */


class Author {

    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;

    }

    _name = '';

    get name() {
        return this._name;
    }

    set name(value) {
        if (value) {
            if (value.length < 3) {
                alert("Name is too short.");
                return;
            } else if (value.length > 12) {
                alert("Name is too long.");
                return;
            }
            this._name = value;
        }


    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (value) {
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(value) == false) {

                alert('Invalid Email Address');
                return;
            }
            this._email = value;

        }


    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        if (value) {
            if (value.toLowerCase() != 'male' && value.toLowerCase() != 'female') {
                alert('Gender can be  Male or Female');
                return;
            }
            this._gender = value.toLowerCase();
        }

    }

    toString() {
        return `name:${this.name}, email:${this.email}, gender:${this.gender}`;
    }


}

class Book extends Author {
    constructor(title, author, price, quantity) {
        super();
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }


    get author() {
        return this._author;
    }

    set author(value) {
        if (value) {
            if (value instanceof Author) {
                this._author = value;

            } else {
                alert('author must be instance of Author Class');
                return
            }

        }


    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value) {
            if (typeof (value) != 'number') {
                alert('Price must be number');
                return;

            }
            this._price = value;
        }

    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {

        if (value) {
            if (typeof (value) != 'number') {
                alert('Quantity must be number')
                return;

            }
            this._quantity = value;
        }

    }

    getProfit() {
        if (this._price && this._quantity) {
            return this._price * this._quantity;
        }
        alert('invalid')

    }

    toString() {
        return `title: ${this.title}, author: ${this.author.toString()}, price: ${this.price},
         quantity: ${this.quantity}`;
    }


}











