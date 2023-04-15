let a = 5
// let a = prompt("number: ")
if (a > 0) {
    console.log(`${a} is positive`)
} else if (a < 0) {
    console.log(`${a} is negative`)
} else if (a == 0) {
    console.log(`num is 0`)
} else {
    console.log(`num is not number`)
}


let userInput = prompt("Operation:")
userInput = userInput.split("")
let num1 = parseFloat(userInput[0]) 
let num2 = parseFloat(userInput[2]) 
let operation = userInput[1]

switch(operation) {
    case '+':
        alert(num1 + num2)
        break
    case '-':
        alert(num1 - num2)
        break
    case '*':
        alert(num1 * num2)
        break
    case '/':
        alert(num1 / num2)
        break
    default:
        alert("Error") 
}
