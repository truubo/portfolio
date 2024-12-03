const myName = "James"
const greetings = [
    "Hi, I'm ", // english
    "Kamusta, ako si ", // tagalog
    "Hola, soy ", // spanish
    "Hallo, ich bin ", // german
    "Olá, meu nome é " // portuguese
]

document.querySelector(".animated-page").querySelector("#greeting").innerHTML = greetings[
    Math.floor(Math.random() * greetings.length)
    ] + myName + "."