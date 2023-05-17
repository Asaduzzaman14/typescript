type UserType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
};

const userA: UserType = {
    name: "mr. Tom",
    age: 22,
    profession: "Web Developer",
    address: "Uganda",
};

const userB: UserType = {
    name: "Mr. Cat",
    profession: "Next Level web developer",
    address: "mexico",
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;

const courseName: CourseNameType = "Next Level Web Development";

type OperationType = (x: number, y: number) => number;

const calculate = (
    number1: number, // 10
    number2: number, //20
    operation: OperationType // (x, y) => x - y)  (10,20)=>10-20
) => {
    return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);