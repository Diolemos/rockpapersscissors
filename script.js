let resultDisplay = document.getElementById("result")

let btnRock = document.getElementById('rock')
let btnpaper = document.getElementById('paper')
let btnscissors = document.getElementById('scissors')

let btn = document.querySelectorAll('.option');

let userScoreNode = document.getElementById("userScore");
let computerScoreNode = document.getElementById("computerScore");
let userScore = 0;
let computerScore = 0;

userScoreNode.innerText = userScore;
computerScoreNode.innerText = computerScore;



let computerSelection
let playerSelection


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

    if (playerSelection === computerSelection) {
        resultDisplay.innerText = "It's a tie"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultDisplay.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
        computerScore++;
        userScoreNode.innerText = userScore;
        computerScoreNode.innerText = computerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultDisplay.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
        userScore++;
        userScoreNode.innerText = userScore;
        computerScoreNode.innerText = computerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultDisplay.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
        computerScore++;
        userScoreNode.innerText = userScore;
        computerScoreNode.innerText = computerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultDisplay.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
        userScore++;
        userScoreNode.innerText = userScore;
        computerScoreNode.innerText = computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultDisplay.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection} `;
        userScore++;
        userScoreNode.innerText = userScore;
        computerScoreNode.innerText = computerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultDisplay.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection} `;
        computerScore++;
        userScoreNode.innerText = userScore;
        computerScoreNode.innerText = computerScore;
    }
    else { resultDisplay.innerText = "Sorry,something went wrong" }
}


// function game() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(gameRound())
//     }

//     console.log("The user score is: " + userScore + " and the computerScore is: " + computerScore);

//     if (userScore > computerScore) {
//         console.log("Congratulations, you won the game")
//     } else {
//         console.log("Sorry, Better luck next time")
//     }
//     userScore = 0;
//     computerScore = 0;
// }

// for (let i = 0; i < 3; i++) {
//     btn[i].addEventListener('click',
//         function () {
//             computerSelection = computerPlay();
//             playerSelection = event.target.innerText.toLowerCase();

//             gameRound();
//         })
// }

btn.forEach(function (element) {
    element.addEventListener('click', function () {


        gameRound(element.id, computerPlay());
    })
})