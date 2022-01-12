function game() {
  let winnerFlag = false;

  while (winnerFlag == false) {
    playRound()
    if (playerScore == 5 || computerScore == 5) {
      winnerFlag = true;
    }
  }
  
  if (playerScore == 5) {
    console.log('Player wins!')
  } else {
    console.log('Computer wins!')
  }
}

function playRound() {
  selection()
  // Make up the logic for the comparing of choice
  let winner;
  if (playerSelection == computerSelection) {
    winner = "It's a tie!"
  } else if (playerSelection == 'ROCK'){
    if (computerSelection == 'PAPER') {
      winner = "Computer wins!"
      computerScore += 1;
    } else {
      winner = "Player wins!"
      playerScore += 1;
    }
  } else if (playerSelection == 'PAPER'){
    if (computerSelection == 'SCISSORS') {
      winner = "Computer wins!"
      computerScore += 1;
    } else {
      winner = "Player wins!"
      playerScore += 1;
    }
  } else if (playerSelection == 'SCISSORS'){
    if (computerSelection == 'ROCK') {
      winner = "Computer wins!"
      computerScore += 1;
    } else {
      winner = "Player wins!"
      playerScore += 1;
    }
  }
  console.log("Player chose " + playerSelection + " and computer chose " + computerSelection + ". " + winner + " Player:" + playerScore + " Computer:" + computerScore)
}

function computerPlay() {
  random = Math.floor(Math.random() * 3)
  if (random == 0) {
    return 'ROCK';
  }
  else if (random == 1) {
    return 'PAPER';
  }
  else if (random == 2) {
    return 'SCISSORS';
  }
}

function validation(selection) {
  let flag = false;
  for (let i = 0; i < correct.length; i++) {
    if (selection == correct[i]){
      flag = true;
    }
  }
  if (flag == false) {
    playerSelection = prompt('Please enter ROCK, PAPER, or SCISSORS:').toUpperCase();
    validation(playerSelection);
  }
}

function selection() {
  playerSelection = prompt('Please enter ROCK, PAPER, or SCISSORS:').toUpperCase();
  validation(playerSelection)
  computerSelection = computerPlay();
}

let playerSelection, computerSelection;
let playerScore = 0;
let computerScore =0;
// let playerSelection = prompt('Please enter ROCK, PAPER, or SCISSORS:').toUpperCase();
const correct = ['ROCK', 'PAPER', 'SCISSORS']

// validation(playerSelection)

// let computerSelection = computerPlay();

game();