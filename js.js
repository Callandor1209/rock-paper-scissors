var humanScore = 0;
var computerScore = 0;
var i = 1;
const div = document.createElement("div")
var content;
const btn = document.querySelector("#btn");
btn.addEventListener("click", playRound);
const reset = document.querySelector("#reset");
reset.addEventListener("click",reset1);
const darkm = document.querySelector("#drkmode");
darkm.addEventListener("click" , darkMode);

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
    addToConsole("Computer chose: " + computerChoice);
    return computerChoice;
}


function getHumanChoice(){
   var humanChoice = prompt("Please input your decision");
     var humanChoice = humanChoice.toLowerCase();
    addToConsole("Human chose: " + humanChoice);
    return humanChoice;
}


function determineOutcome(computerselection, humanselection){
     if(computerselection === "paper" && humanselection=== "paper"){
        addToConsole("Paper vs paper, it's a tie!");
    }
    else if(computerselection === "rock" && humanselection === "rock"){
        addToConsole("Rock vs rock, it's a tie!");
    }
    else if(computerselection === "scissors" && humanselection === "scissors"){
        addToConsole("Scissors vs scissors, it's a tie!");
    }
    else if(computerselection === "scissors" && humanselection === "rock"){
        addToConsole("rock beats scissors, Player wins!!");
        humanScore++;
    }
    else if(computerselection === "scissors" && humanselection === "paper"){
        addToConsole("Scissors beats paper, Computer wins!!");
        computerScore++;
    }
    else if(computerselection === "paper" && humanselection === "scissors"){
        addToConsole("Scissors beats paper, Player wins!!");
        humanScore++;
    }
    else if(computerselection === "paper" && humanselection === "rock"){
        addToConsole("Paper beats rock, Computer wins!!");
        computerScore++;
    }
    else if(computerselection === "rock" && humanselection === "scissors"){
        addToConsole("Rock beats scissors, Computer wins!!");
        computerScore++;
    }
    else if(computerselection === "rock" && humanselection === "paper"){
        addToConsole("Paper beats rock, Player wins!!");
        humanScore++;
    }
    else if(humanselection === "glock"){
        addToConsole("Glock beats everything. Player wins. But at what cost?");
        humanScore++;
    }
    else if(humanselection === "ur mom"){
        addToConsole("That can't be right, ur mom is right here, with me.")
        addToConsole("My score: 10/10");
    }
    else if (humanselection != "rock" && humanselection != "paper" && humanselection != "scissors" && humanselection != "glock"){
        addToConsole("Thats not an option, try again");
        playRound();
    }
    addToConsole("Your score: " + humanScore);
    addToConsole("Computer score: " +    computerScore);
}

function playRound(){
    if(i <= 5){
    var humanselection = getHumanChoice();
    var computerselection = getComputerChoice();
    determineOutcome(computerselection , humanselection);
    i++;
    }
    else if ( i === 6){
        if(humanScore >  computerScore){
            addToConsole("Player wins! Congratulations! You have reached the pinacle of Rock Paper Scissors playing! It can only go downhill from here!");
    
        }
        if(computerScore>humanScore){
            addToConsole("Computer wins! womp womp you suck");
        
        }
        if (computerScore === humanScore){
            addToConsole("You tied, which means you are neither good nor bad! Enjoy mediocracy.")
        }
        i++;
    }
    else if (i > 6){
        addToConsole("Please use the reset button to play again");
    }

}
function reset1(){
   location.reload();
}
function addToConsole(message){
    const output = document.getElementById("output");
    output.textContent += message + '\n';
}
function darkMode(){
    var element = document.body;
  element.classList.toggle("dark-mode");
}