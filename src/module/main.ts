// import file from './module'
// import addTwo from './utils/add'
// import substrac from './utils/add'
// import multiply from './utils/add'


import method from './utils/index'

const add = (num1: number, num2: number): number => {
    return num1 + num2

}

// Method.add(3, 4) // white cut import
// multiply(11, 4)
// file.add(2, 3)
// file.avarage(44, 6)

// const res = addTwo(2, 3)
// const res2 = substrac(2, 3)
// const res3 = multiply(2, 3)

const res = method.addTwo(2, 3)
const res2 = method.substrac(2, 3)
const res3 = method.multiply(2, 33)
