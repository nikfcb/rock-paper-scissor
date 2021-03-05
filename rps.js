let playerScore = 0;
let compScore = 0;

function playRound(event) {
  let playerSelection = event.target.value;
  console.log(playerSelection);

  function computerPlay() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  let computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    document.getElementById("info").innerHTML = "TIED";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    document.getElementById("info").innerHTML = "HUMAN";
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    cdocument.getElementById("info").innerHTML = "HUMAN";
    playerScore++;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    document.getElementById("info").innerHTML = "HUMAN";
    playerScore++;
  } else {
    document.getElementById("info").innerHTML = "MACHINE";
    compScore++;
  }
  console.log(playerScore);
  console.log(compScore);

  if (playerScore === 5) {
    document.getElementById("computer").innerHTML = "HUMAN WON GG";
    document.getElementById("restart").innerHTML =
      "REFRESH YOUR BROWSER TO RESTART THE GAME";
    document.getElementById("btn1").disabled = "true";
    document.getElementById("btn2").disabled = "true";
    document.getElementById("btn3").disabled = "true";
  } else if (compScore === 5) {
    document.getElementById("computer").innerHTML =
      "MACHINES ARE ABOUT TO TAKE OVER";
    document.getElementById("restart").innerHTML =
      "REFRESH YOUR BROWSER TO RESTART THE GAME";
    document.getElementById("btn1").disabled = "true";
    document.getElementById("btn2").disabled = "true";
    document.getElementById("btn3").disabled = "true";
  }
}

let btns = document.querySelectorAll("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", playRound);
}
