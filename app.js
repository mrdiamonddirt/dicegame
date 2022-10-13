//these are variables
const startplay1 = document.getElementById("onePstart");
const startplay2 = document.getElementById("twoPstart");
const showgame1 = document.getElementById("game1");
const showgame2 = document.getElementById("game2");
const menubutton = document.getElementById("menubutton");
const resumePlay = document.getElementById("resume");
const rollDie = document.getElementById("rollDie");
const previousDi = document.getElementById("previous");
const previousDi2 = document.getElementById("previous2");
const player1score = document.getElementById("player1score");
const player2score = document.getElementById("player2score");
const howtoplay = document.getElementById("howto");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
//more variables
var audio = new Audio("audio/RATTLE.WAV");
var diceRoll = Math.floor(Math.random() * 6) + 1;
var diceRoll2 = Math.floor(Math.random() * 6) + 1;
var playingGame = false;
var currentScore = 0;
var currentScorep1 = 0;
var currentScorep2 = 0;
var won = false;
var player = 0;

//how to play event
howtoplay.addEventListener("click", function () {
  console.log("howto");
  document.getElementById("startgame").style.display = "none";
  document.getElementById("game1").style.display = "none";
  document.getElementById("game2").style.display = "none";
  document.getElementById("guide").style.display = "flex";
});
// start game event
startplay1.addEventListener("click", function () {
  console.log("clicked 1");
  document.getElementById("startgame").style.display = "none";
  showgame2.style.display = "none";
  showgame1.style.display = "flex";
  playingGame = true;
  console.log(playingGame);
  //make sure not showing guide
  document.getElementById("guide").style.display = "none";
  //make sure roll button is there
  document.getElementById("rollDie").style.display = "inline";
  resetscores();
});

startplay2.addEventListener("click", function () {
  console.log("clicked 2");
  document.getElementById("startgame").style.display = "none";
  game2.style.display = "flex";
  game1.style.display = "none";
  //make sure not showing guide
  document.getElementById("guide").style.display = "none";
  //make sure roll button is there
  document.getElementById("rollDie2").style.display = "inline";
  resetscores();
});

menubutton.addEventListener("click", function () {
  document.getElementById("startgame").style.display = "flex";
  if (playingGame == true) {
    document.getElementById("resume").style.display = "block";
    resumePlay.addEventListener("click", function () {
      document.getElementById("startgame").style.display = "none";
      // document.getElementById("guide").style.display = "none";
    });
  }
});
function diceroll() {
  //set dice image
  const dice = document.getElementsByClassName("diceimg")[0];
  dice.style.display = "flex";
  dice.src = `images/${diceRoll}.png`;
  dice.style.animation = "rolldiceanim 500ms";
  setTimeout(() => {
    dice.style.animation = "";
  }, 500);
}

// Die Rolling Event game1
rollDie.addEventListener("click", function () {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  // console.log(`Starting Score ${currentScore}`)
  currentScore = currentScore + diceRoll;
  // dice sound
  audio.play();
  //set dice image and animation
  const dice = document.getElementsByClassName("diceimg")[0];
  dice.style.display = "flex";
  dice.src = `images/${diceRoll}.png`;
  dice.style.animation = "rolldiceanim 500ms";
  setTimeout(() => {
    dice.style.animation = "";
  }, 500);
  //lose event
  if (diceRoll == 1) {
    console.log("Event Lose");
    win.style.display = "none";
    lose.style.display = "flex";
    //remove roll button
    document.getElementById("rollDie").style.display = "none";
    var losebtn = document.getElementById("losebtn");
    // listen for button click on lose screen
    losebtn.addEventListener("click", function () {
      //remove object
      lose.style.display = "none";
      //bring button back
      document.getElementById("rollDie").style.display = "inline";
      // reset history
      previousDi.innerHTML = "";
      // reset highscore
      currentScore = 0;
      document.getElementById("score").innerHTML = 0;
      won = false;
    });
    // hide lose screen
    var hidelose = document.getElementById("hidelose");
    hidelose.addEventListener("click", function () {
      lose.style.display = "none";
    });
  }
  if ((currentScore >= 20) & (won == false)) {
    won = true;
    console.log("Event Win");
    win.style.display = "flex";
    var winbtn = document.getElementById("winbtn");
    // listen for button click on win screen
    winbtn.addEventListener("click", function () {
      win.style.display = "none";
    });
  }
  // console.log(`Dice Roll ${diceRoll}`)
  // console.log(`Current Score ${currentScore}`)
  document.getElementById("number").innerHTML = diceRoll;
  document.getElementById("score").innerHTML = currentScore;
  //insert history
  previousDi.innerHTML = previousDi.innerHTML + `<img src="images/${diceRoll}.png"/>`;
  console.log(`previous di ${previousDi.innerHTML}`);
});

// Die Rolling Event for game 2
rollDie2.addEventListener("click", function () {
  if (player == 0) {
    console.log("select player");
    alert("no player selected");
    return;
  }
  var diceRoll2 = Math.floor(Math.random() * 6) + 1;
  currentScore = currentScore + diceRoll2;
  console.log(`dice roll game 2 ${currentScore}`);
  // dice sound
  audio.play();
  //set dice image
  const dice = document.getElementsByClassName("diceimg")[1];
  dice.style.display = "flex";
  dice.src = `images/${diceRoll2}.png`;
  dice.style.animation = "rolldiceanim 500ms";
  setTimeout(() => {
    dice.style.animation = "";
  }, 500);
  //lose event
  if (diceRoll2 == 1) {
    console.log("Event Lose");
    win.style.display = "none";
    lose.style.display = "flex";
    //remove roll button
    document.getElementById("rollDie2").style.display = "none";
    var losebtn = document.getElementById("losebtn");

    // listen for button click on lose screen
    losebtn.addEventListener("click", function () {
      //remove object
      lose.style.display = "none";
      //bring button back
      document.getElementById("rollDie").style.display = "inline";
      document.getElementById("rollDie2").style.display = "inline";
      // reset history
      previousDi2.innerHTML = "";
      // reset highscore
      resetscores();
    });

    // hide lose screen
    var hidelose = document.getElementById("hidelose");
    hidelose.addEventListener("click", function () {
      lose.style.display = "none";
    });
  }
  if ((currentScore >= 20) & (won == false)) {
    won = true;
    console.log("Event Win");
    win.style.display = "flex";
    var winbtn = document.getElementById("winbtn");
    // listen for button click on win screen
    winbtn.addEventListener("click", function () {
      win.style.display = "none";
    });
  }
  if (player == 1) {
    console.log("player 1 selected");
    // currentScorep1 = 0;
    currentScorep1 = currentScore;
    player1score.innerHTML = currentScorep1;
  }
  if (player == 2) {
    console.log("player 2 selected");
    // currentScorep2 = 0;
    currentScorep2 = currentScore;
    player2score.innerHTML = currentScorep2;
  }
  // console.log(`Dice Roll ${diceRoll}`)
  // console.log(`Current Score ${currentScore}`)
  document.getElementById("number2").innerHTML = diceRoll2;
  document.getElementById("score2").innerHTML = currentScore;
  //insert history
  previousDi2.innerHTML = previousDi2.innerHTML + `<img src="images/${diceRoll2}.png"/>`;
  console.log(`previous di ${previousDi2.innerHTML}`);
});

//select player game2
const player1div = document.getElementById("player1");
const player2div = document.getElementById("player2");

player1div.addEventListener("click", function () {
  player = 1;
  player1div.style.backgroundColor = 'orange';
  player2div.style.backgroundColor = 'rgb(69, 123, 157)';
  document.getElementById("score2").innerHTML = player1score.innerHTML;
  currentScore = currentScorep1;
  won = false;
  // resetscores()
});
player2div.addEventListener("click", function () {
  player = 2;
  player2div.style.backgroundColor = 'orange';
  player1div.style.backgroundColor = 'rgb(69, 123, 157)';
  currentScore =currentScorep2;
  document.getElementById("score2").innerHTML = player2score.innerHTML;
  won = false;
  // resetscores()
});

function resetscores() {
  currentScore = 0;
  currentScorep1 = 0;
  currentScorep2 = 0;
  diceRoll = 0;
  diceRoll2 = 0;
  console.log(`Dice Roll ${diceRoll}`);
  console.log(`Current Score ${currentScorep1}`);
  player1score.innerHTML = 0;
  player2score.innerHTML = 0;
  document.getElementById("number").innerHTML = diceRoll;
  document.getElementById("score").innerHTML = currentScore;
  document.getElementById("number2").innerHTML = diceRoll;
  document.getElementById("score2").innerHTML = currentScore;
  //delete history
  previousDi.innerHTML = "";
  previousDi2.innerHTML = "";
  console.log(`previous di ${previousDi.innerHTML}`);
  won = false;
}