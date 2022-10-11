//define variables

let playerChoice;
let computerChoice;
let computerScore = 0;
let playerScore = 0;

 //function to pick random computer choice

function getComputerChoice () {
  const array = ['rock', 'paper', 'scissors'];
  return array[Math.floor(Math.random()*array.length)];
}

const result = document.querySelector('#result');
const playScore = document.querySelector('#playScore');
const compScore = document.querySelector('#compScore');
const finalScore = document.querySelector('#finalResult');

//get player choice from button clicked
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playRound('rock',getComputerChoice()); 
    result.textContent =`${roundResult}`; 
    playScore.textContent ='Player: '+`${playerScore}`; 
    compScore.textContent ='Computer: '+`${computerScore}`;
    finalScore.textContent = null;
    if(playerScore + computerScore == 5) {
      if (playerScore > computerScore){
        finalScore.textContent = 'Congrats, you win the game!'}
      else {finalScore.textContent = 'Boo, you lost the game!'}
      computerScore = 0; playerScore = 0;}
  });
  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
    playRound('paper',getComputerChoice()); 
      result.textContent =`${roundResult}`; 
      playScore.textContent ='Player: '+`${playerScore}`; 
      compScore.textContent ='Computer: '+`${computerScore}`;
      finalScore.textContent = null;
      if(playerScore + computerScore == 5) {
        if (playerScore > computerScore){
          finalScore.textContent = 'Congrats, you win the game!'}
        else {finalScore.textContent = 'Boo, you lost the game!'}
        computerScore = 0; playerScore = 0;}
    });
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playRound('rock',getComputerChoice()); 
    result.textContent =`${roundResult}`; 
    playScore.textContent ='Player: '+`${playerScore}`; 
    compScore.textContent ='Computer: '+`${computerScore}`;
    finalScore.textContent = null;
    if(playerScore + computerScore == 5) {
      if (playerScore > computerScore){
        finalScore.textContent = 'Congrats, you win the game!'}
      else {finalScore.textContent = 'Boo, you lost the game!'}
      computerScore = 0; playerScore = 0;}
  });


//single game-round
function playRound (playerChoice, computerChoice){
  // computerChoice = getComputerChoice ();
  if (playerChoice.toLowerCase() === computerChoice) {return roundResult = "It's a draw, great minds think alike!"}
    else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {++computerScore; return roundResult = "You lose the round! Paper beats rock!"}
    else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {++playerScore; return roundResult = "You win the round! Rock beats scissors!"}
    else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {++playerScore; return roundResult = "You win the round! Paper beats rock!"}
    else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {++computerScore; return roundResult = "You lose the round! Scissors beat paper!"}
    else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {++playerScore; return roundResult = "You win the round! Scissors beat paper!"}
    else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {++computerScore; return roundResult = "You lose the round! Rock beats scissors!"}

}