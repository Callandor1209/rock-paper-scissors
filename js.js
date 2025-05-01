var humanScore = 0;
var computerScore = 0;
const div = document.createElement("div")
var content;
const btn = document.querySelector("#btn");
btn.addEventListener("click", playRound);
const reset = document.querySelector("#reset");
reset.addEventListener("click",reset1);
const darkm = document.querySelector("#drkmode");
darkm.addEventListener("click" , darkMode);
var roundcounter = 0 ;
var lizardspock = "disabled";
var randomized = "disabled";
var glockmedic ="disabled";
var sec = 20;


function getComputerChoice(){
    x = Math.random();

    switch (lizardspock){ 
    case "disabled" :
        if(x>0.66){
       var computerChoice="paper";
    }
    if(x>0.33 && x<=0.66){
        var computerChoice="rock";
    }
    if(x<=0.33){
        var computerChoice="scissors";
    }
    break;
   
    case"enabled":
    if(x>0.80){
        var computerChoice="lizard";
     }
     if(x<=0.80 && x>0.60){
         var computerChoice="spock";
     }
     if(x<=0.60 && x>0.40){
         var computerChoice="scissors";
     }    
      if(x<=0.40 && x>0.20){
        var computerChoice="paper";
     }
     if(x<=0.20){
         var computerChoice="rock";
     }
     break;
    }

    addToConsole("Computer chose: " + computerChoice);
    return computerChoice;
    
}


function getHumanChoice(){
   var humanChoice = prompt("Please input your decision");
     var humanChoice = humanChoice.toLowerCase();
     var humanChoice = humanChoice.replaceAll(" " , "");
    addToConsole("Human chose: " + humanChoice);
    return humanChoice;
}


function determineOutcome(computerselection, humanselection){
        if (computerselection === humanselection){
            addToConsole("Its a tie!");
        }
        else if (humanselection === "rock"){
            if(computerselection === "paper"){
                addToConsole("Rock beats scissors, Computer wins!!");
                computerScore++;
            }
            if (computerselection === "scissors") {
                addToConsole("rock beats scissors, Player wins!!");
                humanScore++;
            }
            if(computerselection === "spock") {
                addToConsole("Spock beats rock, Computer wins!!");
                computerScore++
            }
            if(computerselection === "lizard") {
                addToConsole("Rock beats lizard, Player wins!!");
                humanScore++
            }
        }
        else if (humanselection === "paper"){
            if(computerselection === "scissors"){
                addToConsole("Scissors beats paper, Computer wins!!");
                computerScore++;
             }
            if (computerselection === "rock") {
                addToConsole("Paper beats rock, Player wins!!");
                humanScore++;
            }
            if(computerselection === "lizard") {
                addToConsole("Lizard beats paper, Computer wins!!");
                computerScore++
            }
            if(computerselection === "spock") {
                addToConsole("Paper beats spock, Player wins!!");
                humanScore++
            }
        }
 
        else if (humanselection === "scissors"){
             if(computerselection === "rock"){
                    addToConsole("Rock beats scissors, Computer wins!!");
                    computerScore++;
                }
             if (computerselection === "paper") {
                    addToConsole("Scissors beats paper, Player wins!!");
                    humanScore++;
                }
            if(computerselection === "spock") {
                addToConsole("Spock beats scissors, Computer wins!!");
                computerScore++
            }
            if(computerselection === "lizard") {
                addToConsole("Scissors beats Lizard, Player wins!!");
                humanScore++
            }
        }
        else if(humanselection==="spock" && lizardspock==="enabled"){
            if(computerselection === "scissors"){
                addToConsole("Spock beats scissors, Player wins!!");
                humanScore++;
            }
         if (computerselection === "rock") {
                addToConsole("Spock beats rock, Player wins!!");
                humanScore++;
            }
            if(computerselection === "paper"){
                addToConsole("Paper beats spock, Computer wins!!");
                computerScore++;
            }
         if (computerselection === "lizard") {
                addToConsole("Lizard beats spock, Player wins!!");
                computerScore++;
            }
        }
        else if(humanselection==="lizard" && lizardspock==="enabled"){
            if(computerselection === "spock"){
                addToConsole("Lizard beats spock, Player wins!!");
                humanScore++;
            }
         if (computerselection === "paper") {
                addToConsole("Lizard beats paper, Player wins!!");
                humanScore++;
            }
            if(computerselection === "rock"){
                addToConsole("Rock beats lizard, Computer wins!!");
                computerScore++;
            }
         if (computerselection === "scissors") {
                addToConsole("Scissors beats lizard, Player wins!!");
                computerScore++;
            }
        }
        else if (humanselection==="glock" && glockrun === "enabled"){
            alert("You win, but you now have 20 seconds to play 'run away' or the police catch you and computer wins");
            glock==="enabled";
            humanScore++;
        }
        else if(humanselection==="runaway" && glockrun === "enabled" && glock==="disabled"){
            alert("You run away and the computer wins");
            computerScore++;
        }
        else if(humanselection==="runaway" && glockrun === "enabled" && glock==="enabled"){
            alert("You run away and the computer wins");
            var a = Math.random();
            if(a>0.80){
                alert("The police have stopped chasing you!")
            }
            else{
                alert("The police are still chasing you. Timer reset.")
                sec = 20;
            }
            computerScore++;
        }
        else{
            addToConsole("That is not an input, please try again.");
            roundcounter--;
        }
             
        
        addToConsole("Your score: " + humanScore);
        addToConsole("Computer score: " +    computerScore);
    }

 while(glock==="enabled")
function playRound(){
    if(roundcounter <= 24 ){
    switch(randomized){

    case "disabled":
         var humanselection = getHumanChoice();
        var computerselection = getComputerChoice();
        determineOutcome(computerselection , humanselection);
        roundcounter++;
         var randomizePossible = Math.random();
         if (randomizePossible >= 0.90){
        randomized="enabled"
         }
         break;
    case "enabled":
        alert("Oh no, due to unforseen events in the quantum realm, the results have become randomized for one round!")
        var humanselection = getHumanChoice();
        var computerselection = getComputerChoice();
        var z = Math.random();
        if (z >= 0.50){
            addToConsole(computerselection + " beats " + humanselection + "," + "computer wins!!");
            computerScore++;
            randomized="disabled";
        }
        else{
            addToConsole(humanselection + " beats " + computerselection + "," + "human wins!!");
            humanScore++;
            randomized="disabled";
        }
        roundcounter++
        break;
    }
}
    if(roundcounter === 4){
        alert("Two new options have become avalible, lizard and spock");
        lizardspock = "enabled";
    }
    if(roundcounter===7){
        alert("Once again your repertoire has expanded. New options avalible: glock, run away");
        glockmedic ="enabled";
    }

    else if ( roundcounter === 25){
        if(humanScore >  computerScore){
            addToConsole("Player wins! Congratulations! You have reached the pinacle of Rock Paper Scissors playing! It can only go downhill from here!");
    
        }
        if(computerScore>humanScore){
            addToConsole("Computer wins! womp womp you suck");
        
        }
        if (computerScore === humanScore){
            addToConsole("You tied, which means you are neither good nor bad! Enjoy mediocracy.")
        }
        roundcounter++;
    }
    else if (roundcounter > 25){
        addToConsole("Please use the reset button to play again");
    }

}
function timer(){
    document.getElementById('timerdisplay').innerHTML='00:'+sec;
        sec--;
        if(sec === 0){
            reset1();
        }

}

while(glock==="enabled"){
    setInterval(timer(),1000);
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