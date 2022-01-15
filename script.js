function reset() {
  playerScore = 0;
  computerScore = 0;
  display.innerHTML = '';
  pScore.innerHTML = '';
  cScore.innerHTML = '';
  buttons.innerHTML = '<button class="choice">ROCK</button><button class="choice">PAPER</button><button class="choice">SCISSORS</button>';
  const choices = document.querySelectorAll('.choice');
  choices.forEach(choice => choice.addEventListener('click', makeChoice));
}

function game() {
  let winnerFlag = false;
  if (playerScore == 5 || computerScore == 5) {
    winnerFlag = true;
  }

  if (playerScore == 5) {
    display.innerHTML += "<br>Player wins!<br><button id='reset'>Reset Game</button>"
    resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', reset);
    buttons.innerHTML = '';
  } else if(computerScore == 5) {
    display.innerHTML += "<br>Computer wins!<br><button id='reset'>Reset Game</button>"
    resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', reset);
    buttons.innerHTML = '';
  }
}

function playRound() {
  // selection()
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
  // console.log("Player chose " + playerSelection + " and computer chose " + computerSelection + ". " + winner + " Player:" + playerScore + " Computer:" + computerScore)
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
  display.textContent = "Player chose " + playerSelection + " and computer chose " + computerSelection + ". " + winner
  game()
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

// function validation(selection) {
//   let flag = false;
//   for (let i = 0; i < correct.length; i++) {
//     if (selection == correct[i]){
//       flag = true;
//     }
//   }
//   if (flag == false) {
//     playerSelection = prompt('Please enter ROCK, PAPER, or SCISSORS:').toUpperCase();
//     validation(playerSelection);
//   }
// }

// function selection() {
//   playerSelection = prompt('Please enter ROCK, PAPER, or SCISSORS:').toUpperCase();
//   validation(playerSelection)
//   computerSelection = computerPlay();
// }

let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;
// let playerSelection = prompt('Please enter ROCK, PAPER, or SCISSORS:').toUpperCase();
// const correct = ['ROCK', 'PAPER', 'SCISSORS']
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const display = document.querySelector('#display');
const buttons = document.querySelector('#buttons');
// validation(playerSelection)

// let computerSelection = computerPlay();

// game();
function makeChoice(e) {
  playerSelection = this.innerHTML;
  computerSelection = computerPlay();
  // console.log(playerSelection)
  // console.log(computerSelection)
  playRound();
}

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', makeChoice));

// const choices = document.querySelectorAll('.choice');
// choices.forEach(choice => choice.addEventListener('click', makeChoice));
// console.log(choices)