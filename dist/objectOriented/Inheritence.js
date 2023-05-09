"use strict";
class Parson {
    constructor(name, age, address) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    // this is method
    makeSleep(time) {
        return `This ${this.name} will sleep ${time}`;
    }
}
class Student extends Parson {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
class Teacher extends Parson {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    // this is method
    takeClass(numberOfClass) {
        return `this ${this.name} will take ${numberOfClass} class`;
    }
}
const teacher1 = new Teacher("Mr. Tom Cruis", 40, "USA", "Professor");
