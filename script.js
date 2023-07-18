function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3); // This will give a random number from 0-2
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";

    default:
      break;
  }
}

function play(computer, player) {
  const computerChoice =
    typeof computer === "string" ? computer.toLowerCase() : "";
  const playerChoice = typeof player === "string" ? player.toLowerCase() : "";
  if (computerChoice == playerChoice) return "There's a tie!";
  switch (computerChoice) {
    case "rock":
      if (playerChoice == "paper") return "You win! Paper beats Rock!";
      if (playerChoice == "scissors") return "You lose Rock beats Scissors";
      break;
    case "paper":
      if (playerChoice == "scissors") return "You win! Scissors beats Paper!";
      if (playerChoice == "rock") return "You lose Paper beats Rock";
      break;
    case "scissors":
      if (playerChoice == "paper") return "You lose Paper beats Scissors";
      if (playerChoice == "rock") return "You win! Rock beats Scissors";
      break;
    default:
      break;
  }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    const playerChoice = "rock";
    for(let i =0; i<5;i++){
        const computerChoice = getComputerChoice();
        const result = play(computerChoice,playerChoice);
        console.log(result);
        if(result.includes("win")){
            playerScore++;
        }
        else if( result.includes('lose')){
            computerScore++;
        }
    }
    if(playerScore == computerScore){
        console.log("There's a tie!");
    }else if(playerScore> computerScore){
        console.log("You win!")
    }else{
        console.log("You lose!")
    }
}

game();
