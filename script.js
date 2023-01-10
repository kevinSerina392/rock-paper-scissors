const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Creating a div to display the results
const displayResults = document.createElement('div');

// style the display div
displayResults.innerHTML = '<h1>SCORE</h1>';
displayResults.style.display = 'flex';
displayResults.style.justifyContent = 'center';
document.getElementById('content').appendChild(displayResults);

// Create and display a message when the round results in a tie
const tieMessage = document.createElement('h1');
// Styling tie message
tieMessage.innerHTML = '<h3>The result is a tie. Please choose again!</h3>';

// Create and display a message when the round results in a player win
const playerWinsRoundMessage = document.createElement('h1');
playerWinsRoundMessage.innerHTML = 'Congratulations! You win the round!';
playerWinsRoundMessage.style.display = 'flex';
playerWinsRoundMessage.style.alignItems = 'flex-end';

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
    document.getElementById('msg').appendChild(playerWinsRoundMessage);
};

const computerWin = () => {
    computerPoints += 1;
    console.log(
        `Player: ${playerPoints}, Computer: ${computerPoints}\nComputer has won the round!`
    );
};

const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection) {
        document.getElementById('msg').appendChild(tieMessage);
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
    playerWinsRoundMessage.innerHTML = '';
});

paperButton.addEventListener('click', function () {
    playRound(choices[1], computerChoice);
});

scissorsButton.addEventListener('click', function () {
    playRound(choices[2], computerChoice);
});
