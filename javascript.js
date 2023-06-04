function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

function getPlayerChoice () {
    let playerChoice = prompt("Enter your choice (Rock, Paper or Scissors)");
    return playerChoice.toLowerCase();
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection.toLowerCase()) {
        return "Tie!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "Paper") {
            console.log("You Lose! Paper beats Rock")
            return "You Lose! Paper beats Rock"
        } else {
            console.log("You Win! Rock beats Scissors")
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "Scissors") {
            console.log("You Lose! Scissors beats Paper")
            return "You Lose! Scissors beats Paper"
        } else {
            console.log("You Win! Paper beats Rock")
            return "You Win! Paper beats Rock"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            console.log("You Lose! Rock beats Scissors")
            return "You Lose! Rock beats scissors"
        } else {
            console.log("You Win! Scissors beats Paper")
            return "You Win! Scissors beats Paper"
        }
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <= 5; i++) {
        const playerSelection = getPlayerChoice ();
        const computerSelection = getComputerChoice ();
        let round = playRound(playerSelection, computerSelection)
        if (round.includes("Win")) {
            playerScore++;
        } else if (round.includes("Lose")) {
            computerScore++;
        } else if (round.includes("Tie")) {
            console.log("Tie round!")
        }    
    }
    if (playerScore > computerScore) {
        console.log("You Win!")
    } else if (computerScore >playerScore) {
        console.log("You Lose!")
    } else {
        console.log("Tie Game!")
    }
}

// const playerSelection = getPlayerChoice ();
// const computerSelection = getComputerChoice ();
game()
