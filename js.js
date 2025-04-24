var humanScore = 0;
var computerScore = 0;
playGame();

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
        computerScore++;
    }
    if(computerselection === "paper" && humanselection === "scissors"){
        console.log("Scissors beats paper, Player wins!!");
        humanScore++;
    }
    if(computerselection === "paper" && humanselection === "rock"){
        console.log("Paper beats rock, Computer wins!!");
        computerScore++;
    }
    if(computerselection === "rock" && humanselection === "scissors"){
        console.log("Rock beats scissors, Computer wins!!");
        computerScore++;
    }
    if(computerselection === "rock" && humanselection === "paper"){
        console.log("Paper beats rock, Player wins!!");
        humanScore++;
    }
    console.log("Your score: " + humanScore);
    console.log("Computer score: " +    computerScore);
}


function playGame(){
    var humanselection = getHumanChoice();
    var computerselection = getComputerChoice();
    playRound(computerselection , humanselection);
    getHumanChoice();
    getComputerChoice();
    var humanselection = getHumanChoice();
    var computerselection = getComputerChoice();
    playRound(computerselection , humanselection);
    getHumanChoice();
    getComputerChoice();
    var humanselection = getHumanChoice();
    var computerselection = getComputerChoice();
    playRound(computerselection , humanselection);
    getHumanChoice();
    getComputerChoice();
    var humanselection = getHumanChoice();
    var computerselection = getComputerChoice();
    playRound(computerselection , humanselection);
    getHumanChoice();
    getComputerChoice();
    var humanselection = getHumanChoice();
    var computerselection = getComputerChoice();
    playRound(computerselection , humanselection);
    if(humanScore   computerScore){
        console.log("Player wins! Congratulations!");

    }
    if(computerScore>humanScore){
        console.log("Computer wins! womp womp you suck");
    }
}
