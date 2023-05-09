"use strict";
class Animal {
    // parameter properties
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`this is  ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("German Shephard", "dog", "Ghaw Ghaw");
const Cat = new Animal("White Cat", "", 'mew mew');
dog.makeSound();
Cat.makeSound();
class Car {
    // parameter properties
    constructor(brand, modal, price) {
        this.brand = brand;
        this.modal = modal;
        this.price = price;
    }
    makeCar() {
        console.log(`this is ${this.brand} Modal ${this.modal} Price ${this.price}`);
    }
}
const newCar = new Car("BMW", "M8", 11);
newCar.makeCar();
