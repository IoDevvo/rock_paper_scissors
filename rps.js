let win = 0; 
let lose = 0;//these two variables are forteh final score
const items = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
} //this function returns a random value in the array, later will assign this function to the variable computerSelection


function playRound(playerSelection, computerSelection){
    console.log(computerSelection);
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "It's a Draw!";
        } else if(computerSelection == "paper"){
            lose++;
            return "Paper beats rock, you lose!";
        } else if(computerSelection == "scissors"){
            win++;
            return "Rock beats scissors, you win!";
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            win++;
            return "Paper beats rock, you win!";
        } else if(computerSelection == "paper"){
            return "It's a draw!";
        } else if(computerSelection == "scissors"){
            lose++;
            return "Scissors beats paper, you lose!";
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            lose++;
            return "Rock beats scissors, you lose!";
        } else if(computerSelection == "paper"){
            win++;
            return "Scissors beats paper, you win!";
        } else if(computerSelection == "scissors"){
            return "It's a draw!";
        }
    } else{
        return "Invalid choice";
    }
}//this code plays a round of the game and returns the values

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick Rock, Paper or Scissors:", "");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }//this loop first asks for a prompt by the user, then makes it case insensitive with the toLowerCase() method. Then plays the round for five times
}

game();