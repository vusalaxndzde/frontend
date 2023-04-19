const emptySet = new Set()
console.log(emptySet)


const languages = [
    "English",
    "Azerbaijani",
    "English",
    "Latin",
    "Azerbaijani"
]
const languagesSet = new Set(languages)
console.log(languagesSet)

const set = new Set()
set.add(1)
set.add(2)
set.add(1)
console.log(set)

console.log(set.has(2))
set.delete(1)
console.log(set)
