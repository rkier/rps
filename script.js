console.log("hello world")


let humanScore = 0
let computerScore = 0

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
return computerChoice;
}


let humanChoice = prompt("rock paper scissors")
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
    result = "tie"} 

return result;

}


console.log(humanChoice)
console.log(getComputerChoice())
console.log(playRound())

