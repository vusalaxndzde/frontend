function deleteLi(element) {
    console.log(element)
    let ul = document.querySelector('ul')
    ul.removeChild(element)
}

function createUser() {
    let input = document.querySelector('input')
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = input.value
    ul.appendChild(li)
}