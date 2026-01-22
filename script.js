let interval = 30;
let totalRounds = 8;

let timeRemaining = interval;
let currentRound = 1;
let timerId = null;
let running = false;

const timerEl = document.getElementById("timer");
const roundEl = document.getElementById("round");
const button = document.getElementById("startStop");

function updateUI() {
  timerEl.textContent = timeRemaining;
  roundEl.textContent = `Round ${currentRound} of ${totalRounds}`;
}

function startTimer() {
  running = true;
  button.textContent = "Stop";

  timerId = setInterval(() => {
    timeRemaining--;

    if (timeRemaining === 0) {
      currentRound++;
      if (currentRound > totalRounds) {
        stopTimer();
        return;
      }
      timeRemaining = interval;
    }

    updateUI();
  }, 1000);
}

function stopTimer() {
  running = false;
  clearInterval(timerId);
  timerId = null;
  timeRemaining = interval;
  currentRound = 1;
  button.textContent = "Start";
  updateUI();
}

button.addEventListener("click", () => {
  if (running) {
    stopTimer();
  } else {
    startTimer();
  }
});

updateUI();
