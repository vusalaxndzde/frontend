function square(num) {
    return num ** 2
}
console.log(square(3))

function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(5, 6))

const areaCircle = (radius) => {
    return Math.PI * (radius ** 2)
}
console.log(areaCircle(5))

function sumArr(arr) {
    let sum = 0
    for (let i of arr) {
        sum += i
    }
    return sum
}
const arr = [1,2,3,4]
console.log(sumArr(arr))

function unlimited() {
    let sum = 0
    for (let i of arguments) {
        sum += i
    }
    return sum
}
console.log(unlimited(1,2,3,4,5))

const unlimitedFunc = (...param) => {
    let sum = 0
    for (let i of param) {
        sum += i
    }
    return sum
}
console.log(unlimitedFunc(1,2,3,4,5))