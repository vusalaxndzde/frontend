const nums = [1,2,3,4,5]
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] ** 2)
}

const countries = ["Azerbaijan", "America", "Italy"]
const countriesUp = []
for (const country of countries) {
    countriesUp.push(country.toUpperCase())
}
console.log(countriesUp)


let a = 0;
do {
    if (a == 3) {
        break
    }
    console.log(a)
    a++
} while(true)

let b = 5
while (b > 0) {
    b--
    if (b == 2) {
        continue
    }
    console.log(b)
}