const playerChoice = 0;
let playerScore = 0;
let computerScore = 0;

const gameWinner = document.querySelector("#game-winner");
const score = document.querySelector("#score");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

rockButton.addEventListener("click", () => playGame("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playGame("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playGame("scissors", getComputerChoice()));

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    return computerChoice;
}

function playGame(playerChoice, computerChoice) {
    
    player.textContent = "You chose " + playerChoice;
    computer.textContent = "Computer chose " + computerChoice;

    if (playerChoice === computerChoice) {
        result.textContent = "It's a Tie...";

    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You Win!";
        playerScore++;

    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You Win!";
        playerScore++;

    } else if (playerChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You Win!";
        playerScore++;

    } else {
        result.textContent = "You Lose :(";
        computerScore++;
    }

    score.textContent = "Score: " + playerScore + " - " + computerScore;

    if (playerScore === 5) {
        gameWinner.textContent = "Player Wins";
        playerScore = 0;
        computerScore = 0;

    } else if (computerScore === 5) {
        gameWinner.textContent = "Computer Wins";
        playerScore = 0;
        computerScore = 0;

    } else {
        gameWinner.textContent = '';
    }
}