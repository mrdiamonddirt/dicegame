const startplay1 = document.getElementById("onePstart");
const startplay2 = document.getElementById("twoPstart");
const showgame1 = document.getElementById('game1');
const showgame2 = document.getElementById('game2');
const menubutton = document.getElementById("menubutton");
const resumePlay = document.getElementById("resume");
const rollDie = document.getElementById("rollDie");
const previousDi = document.getElementById("previous");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
var diceRoll = Math.floor(Math.random() * 6) + 1;
var playingGame = false;
var currentScore = 0;
var lastdie = "";
var won = false;

// start game event
startplay1.addEventListener("click", function () {
  console.log("clicked 1");
  document.getElementById("startgame").style.display = "none";
  showgame2.style.display = 'none';
  showgame1.style.display = 'flex';
  playingGame = true;
  console.log(playingGame);
  // reset score
  currentScore = 0;
  diceRoll = 0;
  console.log(`Dice Roll ${diceRoll}`);
  console.log(`Current Score ${currentScore}`);
  document.getElementById("number").innerHTML = diceRoll;
  document.getElementById("score").innerHTML = currentScore;
  //delete history
  previousDi.innerHTML = "";
  console.log(`previous di ${previousDi.innerHTML}`);
});

startplay2.addEventListener("click", function () {
  console.log("clicked 2");
  document.getElementById("startgame").style.display = "none";
game2.style.display = 'flex';
game1.style.display = 'none';
});

menubutton.addEventListener("click", function () {
  document.getElementById("startgame").style.display = "flex";
  if (playingGame == true) {
    document.getElementById("resume").style.display = "block";
    resumePlay.addEventListener("click", function () {
      document.getElementById("startgame").style.display = "none";
    });
  }
});

// Die Rolling Event
rollDie.addEventListener("click", function () {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  // console.log(`Starting Score ${currentScore}`)
  currentScore = currentScore + diceRoll;
  if (diceRoll == 1) {
    console.log("Event Lose");
    win.style.display = "none";
    lose.style.display = "flex";
    //remove roll button
    document.getElementById('rollDie').style.display = 'none';
    var losebtn = document.getElementById("losebtn");
    // listen for button click on lose screen
    losebtn.addEventListener("click", function () {
      //remove object
      lose.style.display = "none";
      //bring button back
      document.getElementById('rollDie').style.display = 'inline';
      // reset history
      previousDi.innerHTML = "";
      // reset highscore
      currentScore = 0;
      document.getElementById("score").innerHTML = 0;
    });
  }
  if (currentScore >= 20 & won == false) {
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
  previousDi.innerHTML = previousDi.innerHTML + diceRoll;
  console.log(`previous di ${previousDi.innerHTML}`);
});
