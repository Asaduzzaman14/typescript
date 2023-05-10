// Pick

interface Person {
    name: string;
    email: string;
    contact: string;

}
type Email = Pick<Person, "email">
type Contact = Pick<Person, "contact" | "name">


// Omit
type Name = Omit<Person, "name">


// Partial and Required
// to  make all the property be optional type

type Optional = Partial<Person>
type RequiredProps = Required<Person>

// record type

// type myObject = {
//     a: string,
//     b: string,
//     c: string
// }

// using index signuature
// type myObject = {
//     [key: string]: string
// }

// record type
type myObject = Record<"a" | "b" | "c" | "d", string>


const obj: myObject = {
    a: "1",
    b: "1",
    c: "1",
    d: "3"
}

