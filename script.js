// Generate random computer choice
function getComputerChoice() {
    let value = Math.random();
    if (value < 1/3) {
        return "Rock";
    } else if (value < 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Declare score tracking system
let humanScore = 0;
let computerScore = 0;

// Write the game process
const game = {
    rock: "Scissors",
    paper: "Rock",
    scissors: "Paper"
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (game[humanChoice] === computerChoice) {
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}
