class StopWatch {
  _interval = null;
  _time = 0;
  constructor(cont) {
    this.cont = document.querySelector(cont);
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.render();
  }

  render() {
    let contStopWatch = CreateDoom.element('div',{type: 'class', value:'cont-stop-watch'});
    let contTimer = CreateDoom.element('div',{type: 'class', value:'cont-timer'});
    let timer = CreateDoom.element('p',{type: 'id', value: 'timer'});
    let btnStart = CreateDoom.btn('img/play.png',{type: 'class', value: 'btn'});
    let btnStop = CreateDoom.btn('img/pause.png',{type: 'class', value: 'btn'});
    let btnReset = CreateDoom.btn('img/reset.png',{type: 'class', value: 'btn'});

    timer.innerHTML = '--:--:--';
    btnStart.addEventListener('click', () => this.start(timer));
    btnStop.addEventListener('click', () => this.stop());
    btnReset.addEventListener('click', () => this.reset(timer));

    contTimer.appendChild(timer);
    contStopWatch.appendChild(contTimer);
    contStopWatch.appendChild(btnStop);
    contStopWatch.appendChild(btnStart);
    contStopWatch.appendChild(btnReset);
    this.cont.appendChild(contStopWatch);
  }

  time() {
    this.hours = this.hours ? (this.hours < 10 ? `0${this.hours}` : this.hours) : '--';
    this.minutes = this.minutes ? (this.minutes < 10 ? `0${this.minutes}` : this.minutes) : '--';
    this.seconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }

  start() {
    this._interval = setInterval(() => {
      if(this.seconds < 59) {
        this.seconds ++;
      } else if (this.minutes < 59) {
        this.seconds = 0;
        this.minutes ++;
      } else if (this.hours < 59) {
        this.minutes = 0;
        this.hours ++;
      }

      this._time = this.time();
      timer.innerHTML = this._time;
    }, 1000);
  } 

  stop() {
    if(this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  reset() {
    this._time = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.stop();
    timer.innerHTML = this.time();
  }
}