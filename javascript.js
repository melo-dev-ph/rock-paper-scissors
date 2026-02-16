function getComputerChoice(){
    const choice = parseInt(Math.floor(Math.random() * 3));
    let hand;
    if(choice == 0) {
        hand = "Rock";
    } else if (choice == 1) {
        hand = "Paper";
    } else {
        hand = "Scissor";
    }
    console.log(`Computer: ${hand}`);
    return choice
}

function getComputerHand(cpChoice){
    if(cpChoice == 0){
        return "Rock";
    } else if (cpChoice == 1){
        return "Paper";
    } else {
        return "Scissor";
    }
}


function getHumanChoiceRock(){
    return 0;
}

function getHumanChoicePaper(){
    return 1;
}

function getHumanChoiceScissor(){
    return 2;
}

function playRound(humanChoice, computerChoice){
    console.log("Entered playRound Function")
    if (humanChoice == computerChoice){
        console.log("Tie - No Score");
    } else if (humanChoice == 0 && computerChoice == 1) {
        console.log("Computer Scores");
        computerScore++;
    } else if (humanChoice == 0 && computerChoice == 2) {
        console.log("You Scores!");
        humanScore++;
    }
}

function checkScore(){
    const status = document.querySelector("#status");
    if (humanScore == 5){
        console.log("You win");
        status.textContent = "You win";

    } else if (computerScore == 5){
        console.log("You Lose");
        status.textContent = "You Lose";
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

const playerChoice = document.querySelector("#player");
const cpChoice = document.querySelector("#cp");

let computerScore = 0;
let humanScore = 0;

rockBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound(getHumanChoiceRock(), computerChoice);
    playerChoice.textContent = "Player: Rock";
    cpChoice.textContent = `Computer: ${getComputerHand(computerChoice)}`;
    checkScore();
})

paperBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound(getHumanChoicePaper(), getComputerChoice);
    playerChoice.textContent = "Player: Paper";
    cpChoice.textContent = `Computer: ${getComputerHand(computerChoice)}`;
    checkScore();
})

scissorBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound(getHumanChoiceScissor(), getComputerChoice);
    playerChoice.textContent = "Player: Scissor";
    cpChoice.textContent = `Computer: ${getComputerHand(computerChoice)}`;
    checkScore();
})
