const startplay1 = document.getElementById('onePstart');
const startplay2 = document.getElementById('twoPstart');
const menubutton = document.getElementById('menubutton');
const resumePlay = document.getElementById('resume');
const rollDie = document.getElementById('rollDie');
const previousDi = document.getElementById('previous');
var diceRoll = Math.floor( Math.random() * 6 ) +1;
var playingGame = false;
var currentScore = 0;
var lastdie = "";


// start game event
startplay1.addEventListener("click", function () {
    console.log("clicked 1")
    document.getElementById('startgame').style.display = 'none';
    playingGame = true;
    console.log(playingGame)
    // reset score
    currentScore = 0;
    diceRoll = 0;
    console.log(`Dice Roll ${diceRoll}`)
    console.log(`Current Score ${currentScore}`)
    document.getElementById('number').innerHTML = diceRoll;
    document.getElementById('score').innerHTML = currentScore;
  });

  startplay2.addEventListener("click", function () {
    console.log("clicked 2")
  });

  menubutton.addEventListener('click', function() {
    document.getElementById('startgame').style.display = 'flex';
    if (playingGame == true) {
        document.getElementById('resume').style.display = 'block';
        resumePlay.addEventListener('click', function() {
        document.getElementById('startgame').style.display = 'none';    
        })
    }
  });

  // Die Rolling Event

  rollDie.addEventListener('click', function() {
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    // console.log(`Starting Score ${currentScore}`)
    currentScore = currentScore + diceRoll;
    // console.log(`Dice Roll ${diceRoll}`)
    // console.log(`Current Score ${currentScore}`)
    document.getElementById('number').innerHTML = diceRoll;
    document.getElementById('score').innerHTML = currentScore;
    previousDi.innerHTML = previousDi.innerHTML + diceRoll;
    console.log(`previous di ${previousDi.innerHTML}`);
  })