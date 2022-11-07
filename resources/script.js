//global variables
let player = "Player 1";
let player1Score = 0;
let player2Score = 0;

function playAgain() {
  for (let i = 1; i < 10; i++) {
    document.getElementById(i).innerHTML = "";
  }
  player = "Player 1";
  playGame();
  // document.getElementById("message").innerHTML = "";
}

function score() {
  document.getElementById("player1Score").innerText = player1Score;
  document.getElementById("player2Score").innerText = player2Score;
}
function toggleButtonVisible() {
  var hideButton = document.getElementById("playButton");
  hideButton.classList.add("hidden");
  var showButton = document.getElementById("playAgainButton");
  showButton.classList.remove("hidden");
}
function catsgame() {
  toggleButtonVisible();
  document.getElementById("message").innerText =
    "Cat's game! No winner, try again.";
}
function checkWinner() {
  const square1 = document.getElementById("1").innerHTML;
  const square2 = document.getElementById("2").innerHTML;
  const square3 = document.getElementById("3").innerHTML;
  const square4 = document.getElementById("4").innerHTML;
  const square5 = document.getElementById("5").innerHTML;
  const square6 = document.getElementById("6").innerHTML;
  const square7 = document.getElementById("7").innerHTML;
  const square8 = document.getElementById("8").innerHTML;
  const square9 = document.getElementById("9").innerHTML;
  if (square1 !== "" && square1 === square2 && square2 === square3) {
    document.getElementById(
      "message"
    ).innerText = `Player ${square1} is the Winner!`;
    if (square1 === "X") {
      player1Score = player1Score + 1;
      player = "";
      toggleButtonVisible();
    } else if (square1 === "O") {
      player2Score = player2Score + 1;
      player = "";
      toggleButtonVisible();
    }
    score();
  } else if (square1 !== "" && square1 === square5 && square5 === square9) {
    document.getElementById(
      "message"
    ).innerText = `Player ${square1} is the Winner!`;
    if (square1 === "X") {
      player1Score = player1Score + 1;
      player = "";
      toggleButtonVisible();
    } else if (square1 === "O") {
      player2Score = player2Score + 1;
      player = "";
      toggleButtonVisible();
    }
    score();
  } else if (square4 !== "" && square4 === square5 && square5 === square6) {
    document.getElementById(
      "message"
    ).innerText = `Player ${square4} is the Winner!`;
    if (square4 === "X") {
      player1Score = player1Score + 1;
      player = "";
      toggleButtonVisible();
    } else if (square4 === "O") {
      player2Score = player2Score + 1;
      player = "";
      toggleButtonVisible();
    }
    score();
  } else if (square7 !== "" && square7 === square8 && square8 === square9) {
    document.getElementById(
      "message"
    ).innerText = `Player ${square7} is the Winner!`;
    if (square7 === "X") {
      player1Score = player1Score + 1;
      player = "";
      toggleButtonVisible();
    } else if (square7 === "O") {
      player2Score = player2Score + 1;
      player = "";
      toggleButtonVisible();
    }
    score();
  } else if (square3 !== "" && square3 === square5 && square5 === square7) {
    document.getElementById(
      "message"
    ).innerText = `Player ${square3} is the Winner!`;
    if (square3 === "X") {
      player1Score = player1Score + 1;
      player = "";
      toggleButtonVisible();
    } else if (square3 === "O") {
      player2Score = player2Score + 1;
      player = "";
      toggleButtonVisible();
    }
    score();
  } else if (square3 !== "" && square3 === square6 && square6 === square9) {
    document.getElementById(
      "message"
    ).innerText = `Player ${square3} is the Winner!`;
    if (square3 === "X") {
      player1Score = player1Score + 1;
      player = "";
      toggleButtonVisible();
    } else if (square3 === "O") {
      player2Score = player2Score + 1;
      player = "";
      toggleButtonVisible();
    }
    score();
  } else if (square2 !== "" && square2 === square5 && square5 === square8) {
    document.getElementById(
      "message"
    ).innerText = `Player ${square2} is the Winner!`;
    if (square2 === "X") {
      player1Score = player1Score + 1;
      player = "";
      toggleButtonVisible();
    } else if (square2 === "O") {
      player2Score = player2Score + 1;
      player = "";
      toggleButtonVisible();
    }
    score();
  } else if (square1 !== "" && square1 === square4 && square4 === square7) {
    document.getElementById(
      "message"
    ).innerText = `Player ${square1} is the Winner!`;
    if (square1 === "X") {
      player1Score = player1Score + 1;
      player = "";
      toggleButtonVisible();
    } else if (square1 === "O") {
      player2Score = player2Score + 1;
      player = "";
      toggleButtonVisible();
    }
    score();
  } else if (
    square1.length &&
    square2.length &&
    square3.length &&
    square4.length &&
    square5.length &&
    square6.length &&
    square7.length &&
    square8.length &&
    square9.length
  ) {
    catsgame();
  } else {
    console.log("no winner yet");
  }
}

function player1Turn(player) {
  document.getElementById("message").innerText = "Player 1 click on a square";
  checkWinner();
}
function player2Turn(player) {
  document.getElementById("message").innerText = "Player 2 click on a square";
  checkWinner();
}

function playerChoice(id) {
  switch (player) {
    case "Player 1":
      let choice1 = document.getElementById(id);
      if (choice1.textContent.length) {
        choice1 = "";
        break;
      } else {
        document.getElementById(id).innerHTML = "X";
        player = "Player 2";
        choice1 = "";
        playGame();
        break;
      }

    case "Player 2":
      let choice2 = document.getElementById(id);
      if (choice2.textContent.length) {
        choice2 = "";
        break;
      } else {
        document.getElementById(id).innerHTML = "O";
        player = "Player 1";
        choice2 = "";
        playGame();
        break;
      }
  }
}

function playGame() {
  if (player === "Player 1") {
    player1Turn(player);
  } else {
    player2Turn(player);
  }
}
