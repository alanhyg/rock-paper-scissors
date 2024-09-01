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

// Prompt for user input, not case-sensitive
function getHumanChoice() {
    let option = ["rock", "paper", "scissors"];
    let choice;

    do {
        choice = prompt("Rock, paper or scissors: ").trim().toLowerCase();
    }
    while (!option.includes(choice));

    return choice.charAt(0).toUpperCase() + choice.slice(1);
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

// Loop the game n times
function playGame(n) {
    for (let i = 0; i < n; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    // Declare winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (humanScore < computerScore) {
        console.log("Game Over. You lose!");
    } else {
        console.log("Tie! Better luck next time!");
    }
}

playGame(5);