// mocking

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    return await response.json()
}


const getTotoData = async () => {
    const result = await getTodo()
    console.log(result);

}

getTotoData()



const makePromise = (): Promise<string> => {

    return new Promise<string>((relolve, reject) => {
        const data: string = 'data is fetched';
        if (data) {
            relolve(data)
        } else {
            reject("Failed to feched data")
        }
    })

}


const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((relolve, reject) => {
        const data: boolean = true;
        if (data) {
            relolve(data)
        } else {
            reject("Failed to feched data")
        }
    })
}

const makePromiseObject = (): Promise<object> => {
    return new Promise<object>((relolve, reject) => {
        const data: object = { data: 'this is objet data' };
        if (data) {
            relolve(data)
        } else {
            reject("Failed to feched data")
        }
    })
}

const makePromiseObj = (): Promise<boolean> => {
    return new Promise<boolean>((relolve, reject) => {
        const data: boolean = true;
        if (data) {
            relolve(data)
        } else {
            reject("Failed to feched data")
        }
    })
}

const getPromisData = async (): Promise<string> => {
    const data = await makePromise()
    console.log(data);
    return data

}
const getPromisBoolen = async (): Promise<boolean> => {
    const data = await makePromiseBoolean()
    console.log(data);
    return data

}

const getPromisObject = async (): Promise<object> => {
    const data = await makePromiseObject()
    console.log(data);
    return data

}
