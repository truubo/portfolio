const myName = "James"
const greetings = ["Hi, I'm ", "Kamusta, ako si ", "Hola, soy ", "Hallo, ich bin "]

document.querySelector(".home").querySelector("#greeting").innerHTML = greetings[
    Math.floor(Math.random() * greetings.length)
    ] + myName + "."