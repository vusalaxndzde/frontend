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

function tekrariSil(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1)
                j--;
            }
        }
    }
    console.log(arr)
}

tekrariSil([1,1,2,3,4,3,2,6])