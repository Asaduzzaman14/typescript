"use strict";
class CarA {
    constructor(name, brand, modal) { }
    startEngine() {
        console.log('i am starting engine');
    }
    stopEngine() {
        console.log('i am stiping engine');
    }
    ;
}
// const vehicle = new Vehicle("Car", "BMW", 6)
// abstract class
class VehicleA {
    constructor(name, brand, modal) { }
    move() {
        console.log('i am moving');
    }
}
class CarB extends VehicleA {
    startEngine() {
        console.log('i am starting engine');
    }
    stopEngine() {
        console.log('i am stoping engine');
    }
}
//  const car1 = new VehicleA('Car', "honda", 2023)
