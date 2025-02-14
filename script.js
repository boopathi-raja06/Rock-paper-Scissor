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
    return humanchoice.toLowerCase();
}
function playRound(humanchoice,computerchoice) {
    let hc=humanchoice;
    let cc=computerchoice;

    if(hc==cc){
        return "Tie! your choice "+hc +" System choice "+cc;
    }
    else if(((hc=="rock") && (cc=="scissor"))||((hc=="scissor") && (cc=="paper")))
    {   humanScore++;
        return "your choice "+hc +" System choice "+cc+" YOu got 1 point!"
    }
    else{
        computerScore++;
        return "your choice "+hc +" System choice "+cc+" System got 1 point"
    }
    
}
// console.log(playRound(getHumanChoice(),getComputerChoice()));
function playGame()
{
    for(let i=0;i<5;i++)
    {
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log("Human Score : "+humanScore);
    console.log("System score : "+computerScore);
    if(humanScore>computerScore){
        console.log("You Win!");
    }
    else if(computerScore>humanScore)
    {
        console.log("System Win!");
    }
    else{
        console.log("Tie !");
    }
}