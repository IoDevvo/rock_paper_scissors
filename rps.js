let win = 0;
let lose = 0;
const items = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

