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

const a = new Set([1,2,3,4])
const b = new Set([3,4,5,6])
const c = new Set([...a, ...b])
console.log(c)


const map = new Map();
map.set("name", "vusal")
console.log(map)

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const countriesMap = new Map(countries)
console.log(countriesMap)
for (const [country, city] of countriesMap) {
    console.log(country, city)
}
