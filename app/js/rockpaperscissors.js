////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    var playerMove;
    playerMove = move || getInput();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove/* Your Expression */;
}

function getComputerMove(move) {

    var computerMove;
    computerMove = move || randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove/* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();

    if (playerMove === computerMove){
        winner = "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (computerMove === "paper" && playerMove === "rock") {
        winner = "computer";
    } else if (computerMove === "scissors" && playerMove === "paper") {
        winner = "computer";
    } else if (computerMove === "rock" && playerMove === "scissors") {
        winner = "computer";
    }    
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
      // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  
  while ((playerWins<5) && (computerWins<5)) {

var playerMove = getPlayerMove();
var computerMove = getComputerMove();
var winner = getWinner();

  if (winner === "player") {
      playerWins += 1;
      console.log("The player played " + playerMove + " and has won this round.");
  }  
  else if (winner === "computer") {
      computerWins +=1;
      console.log("The computer played " + computerMove + " and has won this round.");
  }
  else if (winner === "tie") {
      console.log("It's a tie, play again.");
  }
  else {
      console.log("Something has gone wrong, try again.")
  }

  console.log ("The score is player: " + playerWins + " and computer: " + computerWins);


} /* End of while */


    return [playerWins, computerWins];
}

playToFive();
