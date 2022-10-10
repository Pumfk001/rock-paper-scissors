//define variables

let playerChoice;
let computerChoice;

 //function to pick random computer choice

function getComputerChoice () {
  const array = ['rock', 'paper', 'scissors'];
  return array[Math.floor(Math.random()*array.length)];
}

//get player choice from button clicked
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => console.log(playRound('rock',getComputerChoice())));
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => console.log(playRound('paper',getComputerChoice())));
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => console.log(playRound('scissors',getComputerChoice())));
//});

//single game-round
function playRound (playerChoice, computerChoice){
  // computerChoice = getComputerChoice ();
  if (playerChoice.toLowerCase() === computerChoice) {return roundResult = "It's a draw, great minds think alike!"}
    else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {return roundResult = "You lose! Paper beats rock!"}
    else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {return roundResult = "You win! Rock beats scissors!"}
    else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {return roundResult = "You win! Paper beats rock!"}
    else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {return roundResult = "You lose! Scissors beat paper!"}
    else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {return roundResult = "You win! Scissors beat paper!"}
    else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {return roundResult = "You lose! Rock beats scissors!"}

}




//run game 5 times and declare winner
/*function game(){
  let computerScore = 0;
  let playerScore = 0;



  if (playerScore > computerScore) {console.log('Congrats, you beat the computer ' + playerScore + ' rounds to ' + computerScore);}
   else if (playerScore < computerScore) {console.log('Bad luck, the computer beat you ' + computerScore + ' rounds to ' + playerScore);}
   else {console.log('It\'s a draw, '+ playerScore +' each, everyone\'s a winner!')}
}*/

//game();

// for (let i = 0; i < 5; i++) {
  // console.log('Round '+ (i+1) + ': ' + playRound()); // return result of each round
  // if (roundResult.charAt(4) == 'w') {++playerScore;}
    // else if (roundResult.charAt(4) =='l') {++computerScore;}
