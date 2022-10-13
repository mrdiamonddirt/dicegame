const startplay1 = document.getElementById("onePstart");
const startplay2 = document.getElementById("twoPstart");
const showgame1 = document.getElementById('game1');
const showgame2 = document.getElementById('game2');
const menubutton = document.getElementById("menubutton");
const resumePlay = document.getElementById("resume");
const rollDie = document.getElementById("rollDie");
const previousDi = document.getElementById("previous");
const previousDi2 = document.getElementById("previous2");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
var diceRoll = Math.floor(Math.random() * 6) + 1;
var diceRoll2 = Math.floor(Math.random() * 6) + 1;
var playingGame = false;
var currentScorep1 = 0;
var lastdie = "";
var won = false;
var player = 0;

// start game event
startplay1.addEventListener("click", function () {
  console.log("clicked 1");
  document.getElementById("startgame").style.display = "none";
  showgame2.style.display = 'none';
  showgame1.style.display = 'flex';
  playingGame = true;
  console.log(playingGame);
  //make sure roll button is there
  document.getElementById('rollDie').style.display = 'inline';
  // reset score
  currentScorep1 = 0;
  diceRoll = 0;
  console.log(`Dice Roll ${diceRoll}`);
  console.log(`Current Score ${currentScorep1}`);
  document.getElementById("number").innerHTML = diceRoll;
  document.getElementById("score").innerHTML = currentScorep1;
  //delete history
  previousDi.innerHTML = "";
  previousDi2.innerHTML = "";
  console.log(`previous di ${previousDi.innerHTML}`);
});

startplay2.addEventListener("click", function () {
  console.log("clicked 2");
  document.getElementById("startgame").style.display = "none";
game2.style.display = 'flex';
game1.style.display = 'none';
//make sure roll button is there
document.getElementById('rollDie2').style.display = 'inline';
//clear old scores
currentScorep1 = 0;
diceRoll = 0;
console.log(`Dice Roll ${diceRoll}`);
console.log(`Current Score ${currentScorep1}`);
document.getElementById("number").innerHTML = diceRoll;
document.getElementById("score").innerHTML = currentScorep1;
//delete history
previousDi.innerHTML = "";
console.log(`previous di ${previousDi.innerHTML}`);
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

// Die Rolling Event game1
rollDie.addEventListener("click", function () {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  // console.log(`Starting Score ${currentScorep1}`)
  currentScorep1 = currentScorep1 + diceRoll;
  //lose event
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
      currentScorep1 = 0;
      document.getElementById("score").innerHTML = 0;
    });
    // hide lose screen
    var hidelose = document.getElementById("hidelose");
    hidelose.addEventListener('click', function(){
      lose.style.display = "none";
    })

  }
  if (currentScorep1 >= 20 & won == false) {
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
  // console.log(`Current Score ${currentScorep1}`)
  document.getElementById("number").innerHTML = diceRoll;
  document.getElementById("score").innerHTML = currentScorep1;
  previousDi.innerHTML = previousDi.innerHTML + diceRoll;
  console.log(`previous di ${previousDi.innerHTML}`);
});

// Die Rolling Event for game 2
rollDie2.addEventListener("click", function () {
  if (player == 0){
    console.log('select player')
    alert('no player selected');
    return;
  };
  if (player == 1) {
    console.log('player 1 selected')
  };
  if (player == 2) {
    console.log('player 2 selected')
  };
  var diceRoll2 = Math.floor(Math.random() * 6) + 1;
  console.log(`dice roll game 2 ${currentScorep1}`)
  //lose event
  currentScorep1 = currentScorep1 + diceRoll2;
  //lose event
  if (diceRoll2 == 1) {
    console.log("Event Lose");
    win.style.display = "none";
    lose.style.display = "flex";
    //remove roll button
    document.getElementById('rollDie2').style.display = 'none';
    var losebtn = document.getElementById("losebtn");
    // listen for button click on lose screen
    losebtn.addEventListener("click", function () {
      //remove object
      lose.style.display = "none";
      //bring button back
      document.getElementById('rollDie').style.display = 'inline';
      document.getElementById('rollDie2').style.display = 'inline';
      // reset history
      previousDi2.innerHTML = "";
      // reset highscore
      currentScorep1 = 0;
      document.getElementById("score2").innerHTML = 0;
    });
    // hide lose screen
    var hidelose = document.getElementById("hidelose");
    hidelose.addEventListener('click', function(){
      lose.style.display = "none";
    })

  }
  if (currentScorep1 >= 20 & won == false) {
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
  // console.log(`Current Score ${currentScorep1}`)
  document.getElementById("number2").innerHTML = diceRoll2;
  document.getElementById("score2").innerHTML = currentScorep1;
  previousDi2.innerHTML = previousDi2.innerHTML + diceRoll2;
  console.log(`previous di ${previousDi2.innerHTML}`);
});

//select player game2
const player1div = document.getElementById('player1');
const player2div = document.getElementById('player2');

player1div.addEventListener('click', function(){
  player = 1;
  player1div.style.backgroundColor = 'orange';
})
player2div.addEventListener('click', function(){
  player = 2;
  player1div.style.backgroundColor = 'orange';
})