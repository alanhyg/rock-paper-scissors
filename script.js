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

const btn = document.querySelectorAll('button');

btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let humanChoice = btn.textContent;
        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (game[humanChoice] === computerChoice) {
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    })
})