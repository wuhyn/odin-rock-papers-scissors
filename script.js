//Initialize scores
let playerScore = 0;
let computerScore = 0;

//User query selector for start button
const startButton = document.querySelector('#start-btn');
//Use query selector to match the buttons
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');

//Query select the left and right sections displaying player information
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const startGame = document.querySelector('.start-game');
const gameChoices = document.querySelector('.game-choices');

//Use query selector to match the score 
const playerTotalScore = document.querySelector('#player-score');
const computerTotalScore = document.querySelector('#computer-score');

//Use query selector to match the heading text
const statusText = document.querySelector('#status');

//Add event listener to start button
startButton.addEventListener('click', function(){
    left.classList.toggle('inactive');
    right.classList.toggle('inactive');

    startGame.classList.toggle('inactive');
    gameChoices.classList.toggle('inactive');

})

//Add event listeners to the game buttons 
rockButton.addEventListener('click', function(){
    playRound('Rock', getComputerChoice());
    checkScore();
});

paperButton.addEventListener('click', function(){
    playRound('Paper', getComputerChoice());
    checkScore();
});

scissorsButton.addEventListener('click', function(){
    playRound('Scissors', getComputerChoice());
    checkScore();
});

//This function randomly assigns a choice to the computer player
function getComputerChoice(){
    //Define different choices in the game: rock, paper or sceissors
    let choices = ["Rock", "Paper", "Scissors"];

    //Generate random number
    let randomNumber = Math.floor(Math.random() * (choices.length));
    
    //Return choices
    return choices[randomNumber];
}

//This function will be used to check the score of the game
//The player who reaches 5 wins will be declared the winner of the game
function checkScore(){
    const content = document.createElement('div');
    if(playerScore === 5){
        //Update scores on webpage
        playerTotalScore.textContent = 0;
        playerScore = 0;
        computerTotalScore.textContent = 0;
        computerScore = 0;
        // console.log("Player has won, resetting score now.");
        content.textContent = 'Player won, scores resetted. Select options to start new game.';
        statusText.appendChild(content);
    }
    else if(computerScore === 5){
        //Update scores on webpage
        playerTotalScore.textContent = 0;
        playerScore = 0;
        computerTotalScore.textContent = 0;
        computerScore = 0;
        content.textContent = 'Computer won, scores resetted. Select options to start new game.';
        statusText.appendChild(content);
    }
}

//This function takes the player and computer selections of Rock, Paper or Scissors
//The player's score is updated based on the logic of the game
function playRound(playerSelection, computerSelection){
    //Ensure player selection string is case-insensitive
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let computerChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    let result = '';

    //If player and computer selection is the same, draw, replay
    if(playerChoice === computerChoice){
        result = "Draw! You chose " + playerChoice + ". Computer chose " + computerChoice + ".";
    }
    //If player chooses rock
    else if(playerChoice == "Rock"){
        if(computerChoice == "Paper"){
            computerScore++;
            result = "You Lose! " + computerChoice + " beats " + playerChoice + ".";
        }
        else if(computerChoice == "Scissors"){
            playerScore++;
            result = "You Win! " + playerChoice + " beats " + computerChoice + ".";
        }
    }
    //If player chooses paper
    else if(playerChoice == 'Paper'){
        if(computerChoice == "Scissors"){
            computerScore++;
            result = "You Lose! " + computerChoice + " beats " + playerChoice + ".";
        }
        else if(computerChoice == "Rock"){
            playerScore++;
            result = "You Win! " + playerChoice + " beats " + computerChoice + ".";
        }
    }
    //If player chooses scissors
    else{
        if(computerChoice == "Rock"){
            computerScore++;
            result = "You Lose! " + computerChoice + " beats " + playerChoice + ".";
        }
        else if(computerChoice == "Paper"){
            playerScore++;
            result = "You Win! " + playerChoice + " beats " + computerChoice + ".";
        }      
    }

    //Update scores on webpage
    playerTotalScore.textContent = playerScore;
    computerTotalScore.textContent = computerScore;
    statusText.textContent = result;
}