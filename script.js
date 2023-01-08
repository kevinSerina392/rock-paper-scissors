const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let choices = ['rock', 'paper', 'scissors'];
let playerPoints = 0;
let computerPoints = 0;
let computerChoice;

const computerPlay = () => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
};

const playerWin = () => {
    playerPoints += 1;
    console.log(
        `Player: ${playerPoints}, Computer: ${computerPoints}\nCongratulations! You win the round!`
    );
};

const computerWin = () => {
    computerPoints += 1;
    console.log(
        `Player: ${playerPoints}, Computer: ${computerPoints}\nComputer has won the round!`
    );
};

const playRound = (playerSelection, computerSelection) => {
    // playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    if (playerSelection === computerSelection) {
        console.log('The result is a tie. Please choose again!');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerWin();
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        computerWin();
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
