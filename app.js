const startplay1 = document.getElementById('onePstart');
const startplay2 = document.getElementById('twoPstart');
const menubutton = document.getElementById('menubutton');
const resumePlay = document.getElementById('resume');
const rollDie = document.getElementById('rollDie');
var playingGame = false;

startplay1.addEventListener("click", function () {
    console.log("clicked 1")
    document.getElementById('startgame').style.display = 'none';
    playingGame = true;
    console.log(playingGame)
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

  rollDie.addEventListener('click', function() {
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    document.getElementById('number').innerHTML = diceRoll;
    console.log(diceRoll)
  })