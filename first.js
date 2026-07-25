let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const gencompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame = () =>{
    if(userChoice == compChoice){
        msg.innerText  = "The game was draw,Play again"
        msg.style.backgroundColor = "yellow"
    }else{
        let userWin
        if(userChoice === "rock"){
            userWin = compChoice == "paper"?false:true
        }
        else if(userChoice === "paper"){
            userWin = compChoice == "scissors"?false:true
        }
        else{
             userWin = compChoice == "rock"?false:true
        }
        showWinner(userWin);
    }
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText  = "You win!"
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText  = "You lose"
        msg.style.backgroundColor = "red"
    }
}

const playGame = () =>{
    console.log("UserChoice =",userChoice);
    compChoice = gencompChoice();
    console.log("CompChoice =",compChoice);
    drawGame();
}