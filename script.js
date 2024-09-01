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
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper"
}

const btn = document.querySelectorAll('button');
const dvr = document.querySelector('#result');

btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let humanChoice = btn.textContent;
        console.log(humanChoice);

        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            dvr.textContent = `It's a tie! ${humanScore} - ${computerScore}`;
        } else if (game[humanChoice] === computerChoice) {
            humanScore += 1;
            dvr.textContent = `You win! ${humanScore} - ${computerScore}`;
        } else {
            computerScore += 1;
            dvr.textContent = `You lose! ${humanScore} - ${computerScore}`;
        }

        if (humanScore === 5) {
            dvr.textContent = "Congratulations! You win!";
            reset();
        } else if (computerScore === 5) {
            dvr.textContent = "Game over. You lose!";
            reset();
        }
    });
});

function reset() {
    humanScore = 0;
    computerScore = 0;
}