/*
Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().


Student is inherited from Person. It should have program(array of strings), year, fee.
It should have appropriate getters and setters.
It should have method: passExam(program, grade). Student should contain the data
about its programs and exams. passExam will update that data, so if student passed all
the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.
Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters.
It should have a toString method.
 */

class Person {

    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName() {
        return this._firstName
    }

    set firstName(value) {
        if (typeof (value) === 'string' && value.length >= 4 && value.length <= 12) {
            this._firstName = value;
            return;
        }
        throw new Error('First name must be string and  have min 4 character , max 12 ')

    }

    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        if (typeof (value) === 'string' && value.length >= 4 && value.length <= 20) {
            this._lastName = value;
            return;
        }
        throw new Error('Last name must be string and  have min 4 character , max 20 ')
    }


    get gender() {
        return this._gender
    }

    set gender(value) {

        if (typeof (value) === 'string') {
            if (value.toLowerCase() != 'male' && value.toLowerCase() != 'female') {
                throw new Error('Gender can be  male or female')
            }
            this._gender = value.toLowerCase();
            return;
        }
        throw new Error('Gender must be  string')

    }

    get age() {
        return this._age
    }

    set age(value) {
        if (typeof (value) != 'number') {
            throw new Error('Age must be  number')
        }

        this._age = value;
    }

    toString() {
        return JSON.stringify(this);
    }

}

class Student extends Person {
    #data;

    constructor(...args) {
        super(...args);
        [this.program, this.year, this.fee] = [args[4], args[5], args[6]]
    }

    get data() {
        return this.#data;
    }

    get program() {
        return this._program;
    }

    set program(v) {
        if (Array.isArray(v) && v.every((item) => typeof (item) === 'string')) {
            this._program = v;
            this.#data = {};
            v.forEach(item => this.#data[item] = 0);
            return;

        }
        throw new Error('Invalid format of program')
    }

    get year() {
        return this._year;
    }

    set year(v) {
        if (typeof (v) === 'number' && v >= 0) {
            this._year = v;
            return;
        }
        throw new Error('Invalid format of year')
    }

    get fee() {
        return this._fee;
    }

    set fee(v) {
        if (typeof (v) == 'number' && v >= 0) {
            this._fee = v;
            return;

        }
        throw new Error('Invalid format of fee')
    }

    passExam(program, grade) {

        if (this.program.includes(program)) {
            this.#data[program] = grade;

            if (Object.values(this.#data).every(item => item > 50)) {
                this.year++;
                this.#data = {};
            }
        }

    }

    toString() {
        return super.toString() + this.toString();
    }


}