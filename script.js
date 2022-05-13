let choices = ['Rock', 'Paper', 'Scissors'];
let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    let message;
    // Tie
    if (playerSelection === computerSelection) {
        return 'The result is a tie. Please choose again!';
        // Player win conditions
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerPoints += 1;
        message = `Player: ${playerSelection}, Computer: ${computerSelection}\nCongratulations! You win the round!`;
        return message;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerPoints += 1;
        message = `Player: ${playerSelection}, Computer: ${computerSelection}\nCongratulations! You win the round!`;
        return message;
    } else if (
        playerSelection === 'Scissors' &&
        computerSelection === 'Paper'
    ) {
        playerPoints += 1;
        message = `Player: ${playerSelection}, Computer: ${computerSelection}\nCongratulations! You win the round!`;
        return message;
        // Computer win conditions
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerPoints += 1;
        message = `Player: ${playerSelection}, Computer: ${computerSelection}\nComputer has won the round!`;
        return message;
    } else if (
        playerSelection === 'Paper' &&
        computerSelection === 'Scissors'
    ) {
        computerPoints += 1;
        message = `Player: ${playerSelection}, Computer: ${computerSelection}\nComputer has won the round!`;
        return message;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerPoints += 1;
        message = `Player: ${playerSelection}, Computer: ${computerSelection}\nComputer has won the round!`;
        return message;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Please choose between Rock/Paper/Scissors');
        let computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
        console.log(`Player: ${playerPoints}, Computer: ${computerPoints}`);
    }
}

game();
