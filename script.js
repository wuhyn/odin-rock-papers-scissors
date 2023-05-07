//Initialize scores
let playerScore = 0;
let computerScore = 0;

//Use query selector to match the HTML buttons based on ID
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');

//Add event listeners to the game buttons 
rockButton.addEventListener('click', function(){
    playRound('rock', getComputerChoice());
    checkScore(playerScore, computerScore);
});

paperButton.addEventListener('click', function(){
    playRound('paper', getComputerChoice());
    checkScore(playerScore, computerScore);
});

scissorsButton.addEventListener('click', function(){
    playRound('scissors', getComputerChoice());
    checkScore(playerScore, computerScore);
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

//This function takes the player and computer selections of Rock, Paper or Scissors
//The player's score is updated based on the logic of the game
function playRound(playerSelection, computerSelection){
    //Ensure player selection string is case-insensitive
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let computerChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    console.log(playerChoice);
    console.log(computerChoice);

    //If player and computer selection is the same, draw, replay
    if(playerChoice == computerChoice){
        return "Draw";
    }
    //If player chooses rock
    else if(playerChoice == "Rock"){
        if(computerChoice == "Paper"){
            computerScore++;
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        }
        else if(computerChoice == "Scissors"){
            playerScore++;
            return "You Win! " + playerChoice + " beats " + computerChoice;
        }
    }
    //If player chooses paper
    else if(playerChoice == 'Paper'){
        if(computerChoice == "Scissors"){
            computerScore++;
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        }
        else if(computerChoice == "Rock"){
            playerScore++;
            return "You Win! " + playerChoice + " beats " + computerChoice;
        }
    }
    //If player chooses scissors
    else{
        if(computerChoice == "Rock"){
            computerScore++;
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        }
        else if(computerChoice == "Paper"){
            playerScore++;
            return "You Win! " + playerChoice + " beats " + computerChoice;
        }      
    }
}

//This function will be used to check the score of the game
//The player who reaches 5 wins will be declared the winner of the game
function checkScore(playerScore, computerScore){
    if(playerScore === 5){
        console.log("Player has won.");
    }
    else if(computerScore === 5){
        console.log("Computer has won.");
    }
}