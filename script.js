//Initialize scores
let playerScore = 0;
let computerScore = 0;

//Use query selector to match the buttons
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');

//Use query selector to match the score 
const playerTotalScore = document.querySelector('#player-score');
const computerTotalScore = document.querySelector('#computer-score');

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
    if(playerScore === 5){
        //Update scores on webpage
        playerTotalScore.textContent = 0;
        playerScore = 0;
        computerTotalScore.textContent = 0;
        computerScore = 0;
        console.log("Player has won, resetting score now.");
    }
    else if(computerScore === 5){
        //Update scores on webpage
        playerTotalScore.textContent = 0;
        playerScore = 0;
        computerTotalScore.textContent = 0;
        computerScore = 0;
        console.log("Computer has won, resetting score now.");
    }
}

//This function takes the player and computer selections of Rock, Paper or Scissors
//The player's score is updated based on the logic of the game
function playRound(playerSelection, computerSelection){
    //Ensure player selection string is case-insensitive
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let computerChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    //If player and computer selection is the same, draw, replay
    if(playerChoice === computerChoice){
        console.log("Draw");
    }
    //If player chooses rock
    else if(playerChoice == "Rock"){
        if(computerChoice == "Paper"){
            computerScore++;
            console.log("You Lose! " + computerChoice + " beats " + playerChoice);
        }
        else if(computerChoice == "Scissors"){
            playerScore++;
            console.log("You Win! " + playerChoice + " beats " + computerChoice);
        }
    }
    //If player chooses paper
    else if(playerChoice == 'Paper'){
        if(computerChoice == "Scissors"){
            computerScore++;
            console.log("You Lose! " + computerChoice + " beats " + playerChoice);
        }
        else if(computerChoice == "Rock"){
            playerScore++;
            console.log("You Win! " + playerChoice + " beats " + computerChoice);
        }
    }
    //If player chooses scissors
    else{
        if(computerChoice == "Rock"){
            computerScore++;
            console.log("You Lose! " + computerChoice + " beats " + playerChoice);
        }
        else if(computerChoice == "Paper"){
            playerScore++;
            console.log("You Win! " + playerChoice + " beats " + computerChoice);
        }      
    }

    //Update scores on webpage
    playerTotalScore.textContent = playerScore;
    computerTotalScore.textContent = computerScore;
}