interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void
}

class CarA implements Vehicle {

    constructor(
        name: string,
        brand: string,
        modal: number) { }

    startEngine(): void {
        console.log('i am starting engine');

    }
    stopEngine(): void {
        console.log('i am stiping engine');

    };
    // move(): void {
    //     console.log('i am moving');

    // }

}


// const vehicle = new Vehicle("Car", "BMW", 6)


// abstract class

abstract class VehicleA {

    constructor(
        name: string,
        brand: string,
        modal: number) { }

    abstract startEngine(): void
    abstract stopEngine(): void

    move(): void {
        console.log('i am moving');

    }

}


class CarB extends VehicleA {
    startEngine(): void {
        console.log('i am starting engine');

    }
    stopEngine(): void {
        console.log('i am stoping engine');

    }
}

//  const car1 = new VehicleA('Car', "honda", 2023)
