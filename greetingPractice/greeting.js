const button = document.querySelector("#onlyButton");

function creation() {
        const name = prompt("What is your name?");
        const greeting = document.createElement("greeting");
        greeting.textContent = `Hello, ${name}, nice to see you!`;
        document.body.appendChild(greeting);
    }

button.addEventListener('click', creation);