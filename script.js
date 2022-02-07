function computerPlay() {

    let ramdomNumber = Math.floor(Math.random() * 3 + 1);
    switch (ramdomNumber) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"


    }
}

function gameRound(playerSelection, computerSelection) {
    playerSelection = prompt("Type Rock, Paper or scissors")
    playerSelection = playerSelection.toLocaleLowerCase()
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        return "paper beats rock, you win!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Sorry,Looks like your paper's been cut, better luck next time!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Sorry, your rock is all wrapped up! better luck next time, mate"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++;
        return "Nice move! you smashed the computer's scissors. way 2 go! "
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Sorry, your scissors are smashed, better luck next time"
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        userScore++;
        return "nice move, you shredded the computer's paper"
    }
}

let userScore = 0;
let computerScore = 0;
function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(gameRound())
    }

    console.log("The user score is: " + userScore + " and the computerScore is: " + computerScore);

    if (userScore > computerScore) {
        console.log("Congratulations, you won the game")
    } else {
        console.log("Sorry, Better luck next time")
    }
    userScore = 0;
    computerScore = 0;
}

