console.log("Hello World!");
var humanScore = 0;
var compterScore = 0;
function getComputerChoice(){
    x = Math.random();
    console.log(x)
    if(x>0.66){
       var computerChoice="paper";
    }
    if(x>0.33 && x<=0.66){
        var computerChoice="rock";
    }
    if(x<=0.33){
        var computerChoice="scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}
function getHumanChoice(){
   var humanChoice = prompt("Please input your decision");
     var humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}
function playRound(computerselection, humanselection){
    if(computerselection === "paper" && humanselection=== "paper"){
        console.log("Paper vs paper, it's a tie!");
    }
    if(computerselection === "rock" && humanselection === "rock"){
        console.log("Rock vs rock, it's a tie!");
    }
    if(computerselection === "scissors" && humanselection === "scissors"){
        console.log("Scissors vs scissors, it's a tie!");
    }
    if(computerselection === "scissors" && humanselection === "rock"){
        console.log("rock beats scissors, Player wins!!");
    }
    if(computerselection === "scissors" && humanselection === "paper"){
        console.log("Scissors beats pape, Computer wins!!");
    }
    if(computerselection === "paper" && humanselection === "scissors"){
        console.log("Scissors beats paper, Player wins!!");
    }
    if(computerselection === "paper" && humanselection === "rock"){
        console.log("Paper beats rock, Computer wins!!");
    }
    if(computerselection === "rock" && humanselection === "scissors"){
        console.log("Rock beats scissors, Computer wins!!");
    }
    if(computerselection === "rock" && humanselection === "paper"){
        console.log("Paper beats rock, Player wins!!");
    }
}
const humanselection = getHumanChoice();
const computerselection = getComputerChoice();
playRound(computerselection , humanselection);