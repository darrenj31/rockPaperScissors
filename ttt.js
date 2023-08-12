
const buttons = document.querySelectorAll("button");
console.log(buttons);

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

    if (psLowCase == computerSelection.toLowerCase()){
        console.log("Tie!");
        return 2;
    } else if ((psLowCase == "scissors" && computerSelection == "Paper") || (psLowCase == "rock" && computerSelection == "Scissors") || (psLowCase == "paper" && computerSelection == "Paper")){
        console.log( `${"You win! "}${psLowCase.charAt(0).toUpperCase()}${psLowCase.slice(1)}${" beats "}${computerSelection}`);
        return 1;
    } else {
        console.log( `${"You lose! "}${computerSelection}${" beats "}${psLowCase.charAt(0).toUpperCase()}${psLowCase.slice(1)}`);
        return 0;
    }
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