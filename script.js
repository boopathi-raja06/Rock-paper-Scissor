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
        return "rock";
    }
    else if(n==1)
    {
        return "paper";
    }
    else{
        return "scissor";
    }
}
// function getHumanChoice(event){
//    //et humanchoice=prompt("Enter your choice:(rock,paper or scissor)");
//     return event.target.textContent;
// }
function playRound(humanchoice) {
    let hc=humanchoice;
    let cc=getComputerChoice();

    if(hc==cc){
        console.log( "Tie! your choice "+hc +" System choice "+cc);
    }
    else if(((hc=="rock") && (cc=="scissor"))||((hc=="scissor") && (cc=="paper")))
    {   humanScore++;
        console.log( "your choice "+hc +" System choice "+cc+" YOu got 1 point!");
    }
    else{
        computerScore++;
        return "your choice "+hc +" System choice "+cc+" System got 1 point"
    }
    
}
// console.log(playRound(getHumanChoice(),getComputerChoice()));
// function playGame()
// {
//     for(let i=0;i<5;i++)
//     {
//        console.log(playRound(humanchoice))
//     }
//     console.log("Human Score : "+humanScore);
//     console.log("System score : "+computerScore);
//     if(humanScore>computerScore){
//         console.log("You Win!");
//     }
//     else if(computerScore>humanScore)
//     {
//         console.log("System Win!");
//     }
//     else{
//         console.log("Tie !");
//     }
// }
//playGame();
function handle(event)
{
    const Human=event.target.textContent;
    playRound(Human)
}

const container=document.querySelector(".container");

const btnrock=document.createElement("button");
btnrock.textContent="rock"
const btnpaper=document.createElement("button");
btnpaper.textContent="paper"
const btnscissor=document.createElement("button");
btnscissor.textContent="scissor"
const button=document.querySelectorAll("button")

container.appendChild(btnrock);
container.appendChild(btnpaper);
container.appendChild(btnscissor);

container.addEventListener("click",handle)
