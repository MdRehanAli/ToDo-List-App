const inputField = document.getElementById("input-field")
const List = document.getElementById("List")

function addItems(){
    if (inputField.value === ''){
        alert("Add Something")
    }

    else{
        const li = document.createElement("li")
        li.innerHTML = inputField.value
        List.appendChild(li)

        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputField.value = ''
}