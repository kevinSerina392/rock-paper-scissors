const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const resultsDisplay = document.querySelector('.results');

let choices = ['rock', 'paper', 'scissors'];
let playerPoints = 0;
let computerPoints = 0;
let computerChoice;

const message = document.querySelector('#msg');

const playerScore = document.createElement('h1');
playerScore.innerHTML = `Player: ${playerPoints}`;
resultsDisplay.appendChild(playerScore);

const pcScore = document.createElement('h1');
pcScore.innerHTML = `Computer: ${computerPoints}`;
resultsDisplay.appendChild(pcScore);

const computerPlay = () => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
};

const playerWin = () => {
    message.innerHTML = 'Congratulations! You won the round!';
};

const computerWin = () => {
    message.innerHTML = 'Computer has won the round.';
};

const tie = () => {
    message.innerHTML = 'Tie! Try again.';
};

const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection) {
        tie();
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerWin();
        playerPoints += 1;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        computerWin();
        computerPoints += 1;
    }
};

rockButton.addEventListener('click', function () {
    playRound(choices[0], computerChoice);
});

paperButton.addEventListener('click', function () {
    playRound(choices[1], computerChoice);
});

scissorsButton.addEventListener('click', function () {
    playRound(choices[2], computerChoice);
});
