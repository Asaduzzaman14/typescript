// type Guards
// in guard

type Nromaluser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "admin"
}

function getUser(user: Nromaluser | AdminUser) {
    if ("role" in user) {
        return `i am an admin and my role is ${user.role}`
    } else {
        return 'i am user'
    }
}

const normalUser: Nromaluser = { name: "Mr. Harry" }
const adminUser: AdminUser = { name: "Mr. Harry", role: 'admin' }


console.log(getUser(normalUser));
console.log(getUser(adminUser));

// instance of guard


class AnimalClass {
    name: string;
    species: string;


    constructor(name: string, species: string) {
        this.name = name;
        this.species = species
    }
}
class CreateCat extends AnimalClass {
    constructor(name: string, specis: string) {
        super(name, specis)
    }
    makeSound() {
        console.log(' i am cat');
    }
}
class CreateDog extends AnimalClass {
    constructor(name: string, specis: string) {
        super(name, specis)
    }
    makeBark() {
        console.log(' i am dog');
    }
}

function isDog(animal: AnimalClass): animal is CreateDog {
    return animal instanceof CreateDog
}


function getAnimal(animalParam: AnimalClass) {


    if (isDog(animalParam)) {
        animalParam.makeBark()
    }
    else if (animalParam instanceof CreateCat) {
        animalParam.makeSound()
    }

}


const animal1 = new CreateDog('white dog', "dog") // instance of CreateDog
const animal2 = new CreateCat('white cat', "cat") // instance of CreateCat

getAnimal(animal1)



class Students {
    name: string;
    gender: string

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
    }
}

class Male extends Students {
    constructor(name: string, gender: string) {
        super(name, gender)
    }

    introduction() {
        console.log("i am a Boy");
    }
}

class Female extends Students {
    constructor(name: string, gender: string) {
        super(name, gender)
    }

    introduction() {
        console.log("i am a Girl");
    }
}

function isMale(stu: Students): stu is Male {
    return stu instanceof Male
}
function isFemale(stu: Students): stu is Female {
    return stu instanceof Female
}


function getIntro(student: Students) {

    if (isMale(student)) {
        student.introduction()
    } else if (student instanceof Female) {
        student.introduction()
    }
}



const stu1 = new Male('name', "male")  // instance of Male
const stu2 = new Female('name', "Female")  // instance of Femail

// console.log(stu1);
getIntro(stu1)  // i am a Boy
getIntro(stu2)  // i am Girl
