const rps = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let winMsg;
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
let choice = '';

//Get random choice for Computer player
function computerChoice(rps){
    return rps[Math.floor(Math.random() * 3 )];
}

//prompt Player for their choice
function playerChoice() {
    Choice = prompt("Player, choose Rock, Paper, or Scissors").toLowerCase();

    if(!rps.includes(Choice)){
        alert("Invalid choice, please choose Rock, Paper, or Scissors")
        playerChoice();
    }
    return Choice;
}

//Compare choices and delcares a winner; increment their scores
function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice) {alert("Draw!"); drawCounter++;}

    else if(playerChoice === "rock" && computerChoice === "scissors") {alert("Player wins!"); playerScore++;}
    else if (playerChoice === "rock" && computerChoice === "paper") {alert("Computer wins!"); computerScore++;}

    else if(playerChoice == "paper" && computerChoice == "rock") {alert("Player wins!"); playerScore++;}
    else if(playerChoice == "paper" && computerChoice == "scissors") {alert("Computer wins!"); computerScore++;}

    else if(playerChoice == "scissors" && computerChoice == "paper") {alert("Player wins!"); playerScore++;}
    else if(playerChoice == "scissors" && computerChoice == "rock") {alert("Computer wins!"); computerScore++;}
}

//Main game loop
function game(){

    for (let roundCount = 0; roundCount < 5; roundCount++) {
        playerSelection = playerChoice(rps);
        computerSelection = computerChoice(rps);
        alert(`Player chooses ${playerSelection}, Computer chooses ${computerSelection}`);
        playRound(playerSelection, computerSelection);
    }

    if(playerScore > computerScore) {winMsg = "Player wins the game!";}
    else if(playerScore < computerScore) {winMsg = "Computer wins the game!";}
    else{winMsg = "Draw Game!";}

    alert(`
        Final Score 
        
       Player Score: ${playerScore}
       
       Computer Score: ${computerScore}
       
        Draws: ${drawCounter}

       ${winMsg}
    `);
}

//Welcomes the player and starts the main game loop
alert("Welcome to Rock, Paper, Scissors!");
game();


