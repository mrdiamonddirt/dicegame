const startplay1 = document.getElementById('onePstart');
const startplay2 = document.getElementById('twoPstart');


startplay1.addEventListener("click", function () {
    console.log("clicked 1")
    document.getElementById('startgame').style.display = 'none';
  });

  startplay2.addEventListener("click", function () {
    console.log("clicked 2")
  });