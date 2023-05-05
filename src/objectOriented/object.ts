class Animal {
    name: string;
    species: string;
    sound: string;

    // parameter properties
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound
    }


    makeSound() {
        console.log(`this is  ${this.name} says ${this.sound}`);

    }
}
const dog = new Animal("German Shephard", "dog", "Ghaw Ghaw")
const Cat = new Animal("White Cat", "", 'mew mew')


dog.makeSound()
Cat.makeSound()


class Car {

    // parameter properties
    constructor(public brand: string, public modal: string, public price: number) { }


    public makeCar() {
        console.log(`this is ${this.brand} Modal ${this.modal} Price ${this.price}`);
    }
}

const newCar = new Car("BMW", "M8", 11)
newCar.makeCar();

