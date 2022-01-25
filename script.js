
// const rock = 1;
// const paper = 2;
// const scissors = 3;





function computerPlay() {


    let computerChoise = Math.floor(Math.random() * 3 + 1);
    if (computerChoise === 1) {
        return "rock";
    } else if (computerChoise === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

