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
                j--
            }
        }
    }
    console.log(arr)
}

tekrariSil([1,1,2,3,4,3,2,6])


let arr = [
    {ad : "vusal", giris : 34, bal : 17},
    {ad : "vusal", giris : 34, bal : 18},
    {ad : "vusal", giris : 45, bal : 20},
    {ad : "vusal", giris : 34, bal : 16},
    {ad : "vusal", giris : 32, bal : 17}
]

function check(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bal < 17 || (arr[i].bal + arr[i].giris) < 51) {
            arr.splice(i, 1)
            i--
        }
    }
    console.log(arr)
}

check(arr)