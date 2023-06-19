var metn = document.createTextNode('Salam')
console.log(metn)

let element = document.createElement('p')
element.textContent = 'hello'
console.log(element.value)

document.body.appendChild(element)

let silinecek = document.getElementById('salam-2')
console.log(silinecek)
document.body.removeChild(silinecek)

let link = document.querySelector('a')
link.href = '##'
console.log(link)

let qitmet = link.getAttribute('href')
console.log(qitmet)

let attributes = link.attributes
for (let i = 0; i < attributes.length; i++) {
    let attrubute = attributes[i]
    let name = attrubute.name
    let value = attrubute.value
    console.log(name + " ++ " + value)
}

link.removeAttribute('href')
console.log(link.hasAttribute('href'))