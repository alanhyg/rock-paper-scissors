// Generate random computer choice
function getComputerChoice() {
    let value = Math.random();
    if (value < 1/3) {
        return "rock";
    } else if (value < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Prompt for user input, not case-sensitive
function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors: ");
    return choice.toLowerCase();
}

// Declare score tracking system
let humanScore = 0;
let computerScore = 0;

// Write the game process


// Loop the game n times