console.log("Hello World!");
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
}
getComputerChoice();