let humanScore=0;
let computerScore=0;

function randnum(maxchoice)
{
    return Math.floor(Math.random()*maxchoice);
}
function getComputerChoice()
{
    let n=randnum(3);
    if(n==0)
    {
        return "Rock";
    }
    else if(n==1)
    {
        return "paper";
    }
    else{
        return "scissor";
    }
}
function getHumanChoice(){
    let humanchoice=prompt("Enter your choice:(rock,paper or scissor)");
    return humanchoice;
}
function playRound(humanchoice,computerchoice) {
    let hc=humanchoice;
    let cc=computerchoice;

    if(hc==cc){
        return "Tie";
    }
    else if((hc="rock") && (cc="paper")||(hc="scissor") && (cc= "paper"))
    {
        return "your choice "+hc +"System choice "+cc+"YOu WIN!"
    }
    else{
        return "System Win"
    }
    
}
console.log(playRound(getHumanChoice(),getComputerChoice));