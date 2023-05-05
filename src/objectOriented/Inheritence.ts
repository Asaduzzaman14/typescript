class Parson {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    // this is method
    makeSleep(time: number): string {
        return `This ${this.name} will sleep ${time}`
    }
}


class Student extends Parson {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}



class Teacher extends Parson {

    designation: string;

    constructor(name: string, age: number, address: string, designation: string,) {
        super(name, age, address)
        this.designation = designation
    }

    // this is method
    takeClass(numberOfClass: number) {
        return `this ${this.name} will take ${numberOfClass} class`
    }
}

const teacher1 = new Teacher("Mr. Tom Cruis", 40, "USA", "Professor")