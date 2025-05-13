var humanScore = 0;
var computerScore = 0;
const div = document.createElement("div")
var content;
const btn = document.querySelector("#btn");
btn.addEventListener("click", playRound);
const reset = document.querySelector("#reset");
reset.addEventListener("click", reset1);
const darkm = document.querySelector("#drkmode");
darkm.addEventListener("click", darkMode);
const compscore = document.querySelector("#compscore");
const playerscore = document.querySelector("#playerscore");
const rndcounter = document.querySelector("#roundcounter");
const dropbtn = document.querySelector("#dropbtn");
dropbtn.addEventListener("click", dropdown);
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const new1 = document.querySelector("#new");
var roundcounter = 0;
var lizardspock = "disabled";
var randomized = "disabled";
var glockrun = "disabled";
var glock = "disabled";
var countdownstatus = "disabled";
var notInput = "disabled";
var sec = 10;
var message = "";


function getComputerChoice() {
    x = Math.random();

    switch (lizardspock) {

        case "disabled":
            if (x > 0.66) {
                var computerChoice = "paper";
            }
            if (x > 0.33 && x <= 0.66) {
                var computerChoice = "rock";
            }
            if (x <= 0.33) {
                var computerChoice = "scissors";
            }
            break;

        case "enabled":
            if (x > 0.80) {
                var computerChoice = "lizard";
            }
            if (x <= 0.80 && x > 0.60) {
                var computerChoice = "spock";
            }
            if (x <= 0.60 && x > 0.40) {
                var computerChoice = "scissors";
            }
            if (x <= 0.40 && x > 0.20) {
                var computerChoice = "paper";
            }
            if (x <= 0.20) {
                var computerChoice = "rock";
            }
            break;
    }

    addToConsole("Computer chose: " + computerChoice);
    return computerChoice;

}


function getHumanChoice() {
    var humanChoice = input.value;
    input.value = ""
    addToConsole("Human chose: " + humanChoice);
    var humanChoice = humanChoice.toLowerCase();
    var humanChoice = humanChoice.replaceAll(" ", "");
    return humanChoice;
}


function determineOutcome(computerselection, humanselection) {
    if (computerselection === humanselection) {
        addToConsole("Its a tie!");
    }
    else if (humanselection === "rock") {
        if (computerselection === "paper") {
            addToConsole("Paper beats rock, Computer wins!!");
            computerScore++;
        }
        if (computerselection === "scissors") {
            addToConsole("Rock beats scissors, Player wins!!");
            humanScore++;
        }
        if (computerselection === "spock") {
            addToConsole("Spock beats rock, Computer wins!!");
            computerScore++
        }
        if (computerselection === "lizard") {
            addToConsole("Rock beats lizard, Player wins!!");
            humanScore++
        }
    }
    else if (humanselection === "paper") {
        if (computerselection === "scissors") {
            addToConsole("Scissors beats paper, Computer wins!!");
            computerScore++;
        }
        if (computerselection === "rock") {
            addToConsole("Paper beats rock, Player wins!!");
            humanScore++;
        }
        if (computerselection === "lizard") {
            addToConsole("Lizard beats paper, Computer wins!!");
            computerScore++
        }
        if (computerselection === "spock") {
            addToConsole("Paper beats spock, Player wins!!");
            humanScore++
        }
    }

    else if (humanselection === "scissors") {
        if (computerselection === "rock") {
            addToConsole("Rock beats scissors, Computer wins!!");
            computerScore++;
        }
        if (computerselection === "paper") {
            addToConsole("Scissors beats paper, Player wins!!");
            humanScore++;
        }
        if (computerselection === "spock") {
            addToConsole("Spock beats scissors, Computer wins!!");
            computerScore++
        }
        if (computerselection === "lizard") {
            addToConsole("Scissors beats lizard, Player wins!!");
            humanScore++
        }
    }
    else if (humanselection === "spock" && lizardspock === "enabled") {
        if (computerselection === "scissors") {
            addToConsole("Spock beats scissors, Player wins!!");
            humanScore++;
        }
        if (computerselection === "rock") {
            addToConsole("Spock beats rock, Player wins!!");
            humanScore++;
        }
        if (computerselection === "paper") {
            addToConsole("Paper beats spock, Computer wins!!");
            computerScore++;
        }
        if (computerselection === "lizard") {
            addToConsole("Lizard beats spock, Player wins!!");
            computerScore++;
        }
    }
    else if (humanselection === "lizard" && lizardspock === "enabled") {
        if (computerselection === "spock") {
            addToConsole("Lizard beats spock, Player wins!!");
            humanScore++;
        }
        if (computerselection === "paper") {
            addToConsole("Lizard beats paper, Player wins!!");
            humanScore++;
        }
        if (computerselection === "rock") {
            addToConsole("Rock beats lizard, Computer wins!!");
            computerScore++;
        }
        if (computerselection === "scissors") {
            addToConsole("Scissors beats lizard, Player wins!!");
            computerScore++;
        }
    }
    else if (humanselection === "glock" && glockrun === "enabled") {
        alert("You win, but you now have 10 seconds to play 'run away' or the police catch you and computer wins");
        glock = "enabled";
        startCountdown();
        humanScore++;
    }
    else if (humanselection === "runaway" && glockrun === "enabled" && glock === "disabled") {
        alert("You run away and the computer wins");
        computerScore++;
    }
    else if (humanselection === "runaway" && glockrun === "enabled" && glock === "enabled") {
        alert("You run away and the computer wins");
        var a = Math.random();
        if (a > 0.80) {
            alert("The police have stopped chasing you! Glock has been removed from options.")
            countdownstatus = "disabled"
            glock = "disabled";
            glockrun = "disabled"
        }
        else {
            alert("The police are still chasing you. Timer reset.")
            sec = 10;
        }
        computerScore++;
    }
    else {
        addToConsole("That is not an input, please try again.");
        notInput = "enabled";
    }


}

function playRound() {
    if (roundcounter === 0) {
        new1.textContent = "";
        output.textContent = "";
    }
    if (roundcounter <= 14) {
        switch (randomized) {

            case "disabled":
                var humanselection = getHumanChoice();
                var computerselection = getComputerChoice();
                determineOutcome(computerselection, humanselection);
                var randomizePossible = Math.random();
                if (randomizePossible >= 0.90) {
                    randomized = "enabled"
                }
                break;
            case "enabled":

                alert("Oh no, due to unforseen events in the quantum realm, the results have become randomized for one round!")
                var humanselection = getHumanChoice();
                var computerselection = getComputerChoice();
                switch (notInput) {
                    case "enabled":
                        break;
                    default:
                        var z = Math.random();
                        if (z >= 0.50) {
                            addToConsole(computerselection + " beats " + humanselection + "," + "computer wins!!");
                            computerScore++;
                            randomized = "disabled";
                        }
                        else {
                            addToConsole(humanselection + " beats " + computerselection + "," + "human wins!!");
                            humanScore++;
                            randomized = "disabled";
                        }
                        if (z >= 0.995) {
                            alert("Oh no! The unforseen events in the quantum realm have spiraled out of control and the world has been destroyed");
                            reset1();
                        }
                        break;
                }
        }
    }
    if (roundcounter === 4) {
        alert("Two new options have become avalible, lizard and spock");
        lizardspock = "enabled";
    }
    if (roundcounter === 8) {
        alert("Once again your repertoire has expanded. New option avalible: Glock");
        glockrun = "enabled";
    }

    else if (roundcounter === 15) {
        if (humanScore > computerScore) {
            addToConsole("Player wins! Congratulations! You have reached the pinacle of Rock Paper Scissors playing! It can only go downhill from here!");

        }
        if (computerScore > humanScore) {
            addToConsole("Computer wins! #rigged");

        }
        if (computerScore === humanScore) {
            addToConsole("You tied, which means you are neither good nor bad! Enjoy mediocracy.")
        }
        roundcounter++;
    }
    else if (roundcounter > 15) {
        addToConsole("Please use the reset button to play again");
    }

    playerscore.textContent = "Your score: " + humanScore;
    compscore.textContent = "Computer score: " + computerScore;
    roundcounter++;
    rndcounter.textContent = "Round: " + roundcounter;
    roundcounter--;
    addToNew(message);
    switch (notInput) {
        case "enabled":
            notInput = "disabled"
            break;
        default:
            roundcounter++;
            break;
    }

}

function startCountdown() {
    countdownstatus = "enabled";
    timer();
}
function timer() {
    if (countdownstatus === "enabled") {
        document.getElementById("timerdisplay").textContent = "00:" + sec;
        sec--;
        if (sec === 0) {
            countdownstatus = "disabled";
            reset1();
            return;
        }
        setTimeout(timer, 1000);

    }
    else {
        document.getElementById("timerdisplay").textContent = "";
        return;
    }
}





function reset1() {
    location.reload();
}
function addToConsole(message3) {
    message = message3 + '\n' + message;

}
function addToNew(message4) {
    var messsage5 = new1.textContent;
    actuallyAdd(messsage5);
    message = "";
    new1.textContent = message4;

}

function actuallyAdd(message2) {
    var containsblank = message2.includes("input");
    switch (containsblank) {
        case true:
            if (roundcounter === 0) {
                output.textContent = output.textContent;
            }
            else {
                output.textContent = message2 + '\n' + '\n' + output.textContent;
            }
            break;

        case false:
            if (roundcounter === 0) {
                output.textContent = output.textContent;
            }
            else {
                message2 = "Round " + roundcounter + '\n' + message2;
                output.textContent = message2 + '\n' + '\n' + output.textContent;
            }
            break;
    }
}

function dropdown() {
    document.getElementById("dropdwn").classList.toggle("show");

}
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
