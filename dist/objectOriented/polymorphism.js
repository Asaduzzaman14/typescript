"use strict";
console.log("polymorphism");
class Person {
    takeNap() {
        console.log(`i am sleeping 8 houre par day`);
    }
}
class StudentA extends Person {
    takeNap() {
        console.log(`i am sleeping 10 houre par day`);
    }
}
class Developer extends Person {
    takeNap() {
        console.log(`i am sleeping 6 houre par day`);
    }
}
const person1 = new Person();
const person2 = new StudentA();
const person3 = new Developer();
const getNap = (param) => {
    param.takeNap();
};
getNap(person1);
getNap(person2);
getNap(person3);
class Shape {
    getArea() {
        return 0;
    }
}
// area -> pi *r *r
class Circel extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectancel {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circel(10));
getAreaOfShape(new Rectancel(10, 12));
