console.log("Hello World!");
var humanScore = 0;
var compterScore = 0;
function getComputerChoice(){
    x = Math.random();
    console.log(x)
    if(x>0.66){
       var computerChoice="paper";
    }
    if(x>0.33,x<=0.66){
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
    if(computerselection === "paper" , humanselection=== "paper"){
        console.log("Paper vs Paper, it's a tie!");
    }
    if(computerselection === "rock" , humanselection === "rock"){
        console.log("Rock vs Rock, it's a tie!");
    }
    if(computerselection === "scissors" , humanselection === "scissors"){
        console.log("Scissors vs Scissors, it's a tie!");
    }
}
const humanselection = getHumanChoice();
const computerselection = getComputerChoice();
playRound(computerselection , humanselection);