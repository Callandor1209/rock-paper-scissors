var humanScore = 0;
var compterScore = 0;


function getComputerChoice(){
    x = Math.random();
    if(x>0.66){
       var computerChoice="paper";
    }
    if(x>0.33 && x<=0.66){
        var computerChoice="rock";
    }
    if(x<=0.33){
        var computerChoice="scissors";
    }
    console.log("Computer chose: " + computerChoice);
    return computerChoice;
}


function getHumanChoice(){
   var humanChoice = prompt("Please input your decision");
     var humanChoice = humanChoice.toLowerCase();
    console.log("Human chose: " + humanChoice);
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
        humanScore++;
    }
    if(computerselection === "scissors" && humanselection === "paper"){
        console.log("Scissors beats paper, Computer wins!!");
        compterScore++;
    }
    if(computerselection === "paper" && humanselection === "scissors"){
        console.log("Scissors beats paper, Player wins!!");
        humanScore++;
    }
    if(computerselection === "paper" && humanselection === "rock"){
        console.log("Paper beats rock, Computer wins!!");
        compterScore++;
    }
    if(computerselection === "rock" && humanselection === "scissors"){
        console.log("Rock beats scissors, Computer wins!!");
        compterScore++;
    }
    if(computerselection === "rock" && humanselection === "paper"){
        console.log("Paper beats rock, Player wins!!");
        humanScore++;
    }
    console.log("Your score: " + humanScore);
    console.log("Your score: " + compterScore);
}


const humanselection = getHumanChoice();
const computerselection = getComputerChoice();


function playGame(){
    playRound(computerselection , humanselection);
    playRound(computerselection , humanselection);
    playRound(computerselection , humanselection);
    playRound(computerselection , humanselection);
    playRound(computerselection , humanselection);
    if(humanScore>compterScore){
        console.log("Player wins! Congratulations!");

    }
    if(computerScore>humanScore){
        console.log("Computer wins! womp womp you suck");
    }


    playGame();
}