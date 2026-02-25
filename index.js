//console.log("Hello World");
//lert("Hello World");

const buttonA = document.querySelector("#button_A");
const headingA = document.getElementById("heading_A");

buttonA.addEventListener('click', function() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;

});

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
const sentence = document.querySelector("#sentence");

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
    //Come back to ts
    output.sentence = `Sentence: "${output.textContent}"`;
});