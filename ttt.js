
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
let roundResult;
const playerScoreText = document.getElementById("playerScore");
const compScoreText = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;
const gameResultDiv = document.getElementById("gameResult");


function playRoundFunc(e){
    console.log(e.target.textContent);
    playRound(e.target.textContent, getComputerChoice());
}

buttons.forEach((button) => button.addEventListener('click', playRoundFunc));




function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    if (num == 0){
        return "Rock";
    } else if(num == 1){
        return "Paper";
    } else {
        return "Scissors";
    }s
}

function playRound(playerSelection, computerSelection){
    const psLowCase = playerSelection.toLowerCase();
    let resultText = "";
    if (psLowCase == computerSelection.toLowerCase()){
        resultText = "Tie!";
        // return 2;
    } else if ((psLowCase == "scissors" && computerSelection == "Paper") || (psLowCase == "rock" && computerSelection == "Scissors") || (psLowCase == "paper" && computerSelection == "Paper")){
        resultText = `${"You win! "}${psLowCase.charAt(0).toUpperCase()}${psLowCase.slice(1)}${" beats "}${computerSelection}`;
        playerScore++;
        if (playerScore == 5){
            displayGameWinner("Your name");
        }
        // return 1; 
    } else {
        resultText = `${"You lose! "}${computerSelection}${" beats "}${psLowCase.charAt(0).toUpperCase()}${psLowCase.slice(1)}`;
        computerScore++;
        if (computerScore == 5){
            displayGameWinner("Computer");
        }
        // return 0;
    }
    if (!roundResult){
        roundResult = document.createElement('p');
    }
    roundResult.textContent = resultText;
    playerScoreText.textContent = "Your score: " + playerScore;
    compScoreText.textContent = "Computer score: " + computerScore;
    result.appendChild(roundResult);
}

function displayGameWinner(winner){
    gameResult = document.createElement('p');
    gameResult.textContent = "Game winner: " + winner;
    gameResultDiv.appendChild(gameResult);
}

// function game(){
//     let playerScore = 0;
//     let compScore = 0;
//     for (let i = 0; i<5; i++){
//         const ps = prompt("Next move: ");
//         const result = playRound(ps, getComputerChoice());
//         if (result == 1){
//             playerScore++;
//         } else if(result == 0){
//             compScore++;
//         }
//     }
//     if (playerScore>compScore){
//         return(`${"You win "}${playerScore}${" to "}${compScore}`);
//     } else if(playerScore<compScore){
//         return(`${"You lose "}${playerScore}${" to "}${compScore}`);
//     } else{
//         return "Draw";
//     }
// }