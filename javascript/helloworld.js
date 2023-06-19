var metn = document.createTextNode('Salam')
console.log(metn)

let element = document.createElement('p')
element.textContent = 'hello'
console.log(element)

document.body.appendChild(element)

let silinecek = document.getElementById('salam-2')
console.log(silinecek)
document.body.removeChild(silinecek)

let link = document.querySelector('a')
link.href = '##'
console.log(link)
