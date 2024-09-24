const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const winnerNameElement = document.getElementById('winner-name-element');

let computerChoice;
let userChoice;

rockButton.addEventListener('click', () => {
    userChoice = 'rock';
    playGame();
});

paperButton.addEventListener('click', () => {
    userChoice = 'paper';
    playGame();
});

scissorsButton.addEventListener('click', () => {
    userChoice = 'scissors';
    playGame();
});

function playGame() {
    computerChoice = getComputerChoice();
    determineWinner();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


// ... (same as before)

function determineWinner() {
    if (userChoice === computerChoice) {
        winnerNameElement.textContent = 'It\'s a tie!';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        winnerNameElement.textContent = 'You win!';
        document.getElementById('winner-name').classList.add('winner-animation');
    } else {
        winnerNameElement.textContent = 'Computer wins!';
        document.getElementById('winner-name').classList.add('winner-animation');
    }
}