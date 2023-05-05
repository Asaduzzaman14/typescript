type User = {  //alias type
    name: string;
    age: number
}
interface IUser {       // interface use for object
    name: string;
    age: number;
}

interface extendadeuser extends IUser {
    role: string
}

const user: extendadeuser = {
    name: "user",
    age: 222,
    role: "web"
}
const userWithTypeAlias: User = {
    name: "User Name",
    age: 20
}

const userWithInterface: IUser = {
    name: "User Name",
    age: 20
}




type addNumberType = (num1: number, num2: number) => number  // type alies

interface IAddNumber {   // type interface
    (num1: number, num2: number): number
}

type RollNumber = number[]

interface roleNumberTypes {
    [index: number]: string
}

const rollNumber: roleNumberTypes = ["2", "4", "5"]

const addNumber: IAddNumber = (num1, num2) => num1 + num2



