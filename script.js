


let humanScore = 0
let computerScore = 0
let humanChoice 
let computerChoice

function getComputerChoice() {

    let rando = Math.random();
    if (rando > .33 && rando < .66) {
     computerChoice = "rock" 
} else if (rando < .33) {
    computerChoice = "paper"
} else if (rando > .66) {
    computerChoice = "scissors" 
}
console.log(computerChoice);
}

function getHumanChoice() {
   
 {humanChoice = prompt("rock paper scissors")} 
console.log(humanChoice);
}


let result

function playRound() {
    

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
} if (result === "win") {
    humanScore = ++humanScore;
} else if (result === "loss") {
    computerScore === ++computerScore;
} 

console.log("computer's score: ", computerScore);
console.log("your score: ", humanScore);

console.log(result);


}

function playGame() {

    if (humanScore === 5) {
        alert("You Win!")
    } else if (computerScore === 5) {
        alert("You Lose!")
    } else {
 
    
getComputerChoice();
getHumanChoice();
playRound();
playGame();
    }
}
playGame()



