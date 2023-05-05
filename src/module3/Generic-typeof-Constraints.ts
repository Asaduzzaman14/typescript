type PersoneType = {
    name: string;
    age: number;
    address: string
}
type newType = "name" | "age" | "address"; // manualy type

type newTypeUsingKeyOf = keyof PersoneType;

// const a: newType = 'age'
// const b: newTypeUsingKeyOf = "name"


// ({ name: "Mr: x",age:100 },"name") //100

function getProperty<X, Y extends keyof X>(param: X, key: Y) {
    param[key]
}

const property = getProperty({ name: "Mr.x", age: 100 }, "age")


// const a = {
//     name: "MR. Tom",
//     age: 132
// }
// a["name"]