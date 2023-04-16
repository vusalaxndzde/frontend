let arr1 = new Array(4).fill(0)
console.log(arr1)

let arr = [1, 2, 3, 4, 5]
console.log(arr)

arr.push(6)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

let index = arr.indexOf(3)
arr.splice(index, 1, 0)
console.log(arr)
