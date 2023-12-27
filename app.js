var score = 0;
var timer = 60;
var hitrn = 0;

function incScore() {
  score += 10;
  document.getElementById("scoreVal").textContent = score;
}

function getNewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.getElementById("hitVal").textContent = hitrn;
}

function makeBuble() {
  var clutter = "";
  // creating bubble using Loops
  for (let i = 1; i < 162; i++) {
    let count = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${count}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer() {
  var timer1 = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").innerHTML = timer;
    } else {
      clearInterval(timer1);
      document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

// Event listner on Parent node
document.querySelector("#pbottom").addEventListener("click", function (dets) {
  const clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    incScore();
    makeBuble();
    getNewhit();
  }
});

// incScore();exit

makeBuble();
runTimer();
getNewhit();
