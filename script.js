


let humanScore = 0
let computerScore = 0
let humanChoice 
let computerChoice

function getComputerChoice() {

    let rando = Math.random();
    if (rando >= .33 && rando < .66) {
     computerChoice = "rock" 
} else if (rando < .33) {
    computerChoice = "paper"
} else if (rando > .66) {
    computerChoice = "scissors" 
}

}
const input = document.querySelector("input");
const button = document.querySelector("button");
const playerScoreResult = document.querySelector(".playerScore")
const cpuScoreResult = document.querySelector(".cpuScore")
const msg = document.querySelector(".msg")

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerScoreResult.textContent = `your score: ${humanScore}`;
    cpuScoreResult.textContent = `computer score: ${computerScore}`;
    alert("New Game");
}



function playRound() {

    let result;
    

if (computerChoice === "rock" && humanChoice === "paper" ) {
    result = "win"
} else if (computerChoice === "rock" && humanChoice === "scissors") {
    result = "loss"
} else if (computerChoice=== "paper" && humanChoice === "rock" ) {
    result = "loss"
} else if (computerChoice === "paper" && humanChoice === "scissors") {
    result = "win"
} else if (computerChoice === "scissors" && humanChoice === "paper" ) {
    result = "loss"
} else if (computerChoice === "scissors" && humanChoice === "rock") {
    result = "win"  
} else if (computerChoice === humanChoice) {
    result = "tie" 
    //msg.textContent = 
} if (result === "win") {
    humanScore++;
} else if (result === "loss") {
    computerScore++;
} 

console.log("computer's score: ", computerScore);
console.log("your score: ", humanScore);
playerScoreResult.textContent = `your score:  ${humanScore}`;
cpuScoreResult.textContent = `computer's score:  ${computerScore}`;
msg.textContent = `you chose: ${humanChoice}          cpu chose: ${computerChoice}`


console.log(result);


}

function playGame() {

    if (humanScore === 3) {
        alert("You Win!");
        resetGame();
    } else if (computerScore === 3) {
        alert("You Lose!")
        resetGame();
    } 
}

 
function getChoices() {
   
    button.addEventListener("click", () => {
        getComputerChoice();
     humanChoice = input.value;
    input.value ="";
    

    
    
    input.focus();
    console.log(humanChoice);
    console.log(computerChoice);

    
    
    playRound();
    playGame();
  })
}
  
 


    
//getComputerChoice();
//getchoices();

    

getChoices()



