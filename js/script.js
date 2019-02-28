(function () {
  const btnStart = document.getElementById('start');
  const btnReset = document.getElementById('reset');
  const btnStop = document.getElementById('stop');

  const timer = document.getElementById('timer');
  const contMinutes = document.createElement('span');
  const contseconds = document.createElement('span');
  const contMili = document.createElement('span');

  let intervalTimer;
  let minutes = 0;
  let seconds = 0;
  let miliseconds = 0;
  addDom(minutes, seconds, miliseconds);

  function runTimer() {
    if(miliseconds < 100) {
      miliseconds += 1;
    } else if (seconds < 59) {
      miliseconds = 0;
      seconds += 1;
    } else if (minutes < 59) {
      seconds = 0;
      minutes += 1;
    } else if (minutes > 59) {
      stopTimer();
    }
    addDom(minutes, seconds, miliseconds);
  }

  function addDom(minutes, seconds, miliseconds) {
    contMinutes.innerHTML = `${minutes}:`;
    contseconds.innerHTML = `${seconds}:`;
    contMili.innerHTML = `${miliseconds}`;
    timer.appendChild(contMinutes);
    timer.appendChild(contseconds);
    timer.appendChild(contMili);
  }

  function stopTimer() {
    clearInterval(intervalTimer);
  }

  function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    
    addDom(minutes, seconds, miliseconds);
  }
  btnStart.addEventListener('click', ()=> {
    intervalTimer = setInterval(runTimer, 10);
  });
  btnStop.addEventListener('click', stopTimer);
  btnReset.addEventListener('click', resetTimer);
})();