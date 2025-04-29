var humanScore = 0;
var computerScore = 0;
var i = 1;

function getComputerChoice(){
    x = Math.random();
    addToConsole(x);
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


function determineOutcome(computerselection, humanselection){
     if(computerselection === "paper" && humanselection=== "paper"){
        console.log("Paper vs paper, it's a tie!");
    }
    else if(computerselection === "rock" && humanselection === "rock"){
        console.log("Rock vs rock, it's a tie!");
    }
    else if(computerselection === "scissors" && humanselection === "scissors"){
        console.log("Scissors vs scissors, it's a tie!");
    }
    else if(computerselection === "scissors" && humanselection === "rock"){
        console.log("rock beats scissors, Player wins!!");
        humanScore++;
    }
    else if(computerselection === "scissors" && humanselection === "paper"){
        console.log("Scissors beats paper, Computer wins!!");
        computerScore++;
    }
    else if(computerselection === "paper" && humanselection === "scissors"){
        console.log("Scissors beats paper, Player wins!!");
        humanScore++;
    }
    else if(computerselection === "paper" && humanselection === "rock"){
        console.log("Paper beats rock, Computer wins!!");
        computerScore++;
    }
    else if(computerselection === "rock" && humanselection === "scissors"){
        console.log("Rock beats scissors, Computer wins!!");
        computerScore++;
    }
    else if(computerselection === "rock" && humanselection === "paper"){
        console.log("Paper beats rock, Player wins!!");
        humanScore++;
    }
    else if (humanselection != "rock" && humanselection != "paper" && humanselection != "scissors"){
        console.log("Thats not an option, try again");
        playRound();
    }
    console.log("Your score: " + humanScore);
    console.log("Computer score: " +    computerScore);
}


/*function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if(humanScore >  computerScore){
        console.log("Player wins! Congratulations! You have reached the pinacle of Rock Paper Scissors playing! It can only go downhill from here!");

    }
    if(computerScore>humanScore){
        console.log("Computer wins! womp womp you suck");
    
    }
    if (computerScore === humanScore){
        console.log("You tied, which means you are neither good nor bad! Enjoy mediocracy.")
    }
}
*/
function playRound(){
    if(i <= 5){
    var humanselection = getHumanChoice();
    var computerselection = getComputerChoice();
    determineOutcome(computerselection , humanselection);
    i++;
    }
    else{
        if(humanScore >  computerScore){
            console.log("Player wins! Congratulations! You have reached the pinacle of Rock Paper Scissors playing! It can only go downhill from here!");
    
        }
        if(computerScore>humanScore){
            console.log("Computer wins! womp womp you suck");
        
        }
        if (computerScore === humanScore){
            console.log("You tied, which means you are neither good nor bad! Enjoy mediocracy.")
        }
    }

}
 
function addToConsole(y){
const para = document.createElement("p");
const node = document.createTextNode(y);
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", playRound);