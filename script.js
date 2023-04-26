function getComputerChoice(){
    //Define different choices in the game: rock, paper or sceissors
    let choices = ["Rock", "Paper", "Scissors"];

    //Generate random number
    let randomNumber = Math.floor(Math.random() * (choices.length));
    
    //Return choices
    return choices[randomNumber];
}

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
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        }
        else if(computerChoice == "Scissors"){
            return "You Win! " + playerChoice + " beats " + computerChoice;
        }
    }
    //If player chooses paper
    else if(playerChoice == 'Paper'){
        if(computerChoice == "Scissors"){
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        }
        else if(computerChoice == "Rock"){
            return "You Win! " + playerChoice + " beats " + computerChoice;
        }
    }
    //If player chooses scissors
    else{
        if(computerChoice == "Rock"){
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        }
        else if(computerChoice == "Paper"){
            return "You Win! " + playerChoice + " beats " + computerChoice;
        }      
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
