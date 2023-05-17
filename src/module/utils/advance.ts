// Properties

interface Model<TData, TMethods> {
    data: TData;
    methods: TMethods;
}

interface IUserA {
    firstName: string;
    lastName: string;
}

// Methods
interface IMethods {
    fullName(): string;
}

type model = Model<IUserA, IMethods>;

class UserClass implements model {
    data: IUserA;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${this.data.firstName} ${this.data.lastName}`
        };
    }
}

const user1 = new UserClass("MR", "Tom");
console.log(user1.methods.fullName());