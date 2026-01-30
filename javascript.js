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


function getHumanChoice(){
    return parseInt(prompt("0 - Rock | 1 - Paper | 2 - Scissor | Input: "));
}

function playRound(humanChoice, computerChoice){
    
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

function playGame(){
    for (let i = 1; i <=5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore){
        console.log("You win");
    } else {
        console.log("You Lose");
    }
}



let humanScore = 0;
let computerScore = 0;

playGame();
