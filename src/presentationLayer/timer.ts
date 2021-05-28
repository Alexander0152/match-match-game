const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: 'green',
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 30;

export default class Timer {
  timePassed = 0;

  timeLeft = TIME_LIMIT;

  timerInterval: number = null;

  remainingPathColor = COLOR_CODES.info.color;

  timer: Element;

  constructor(private readonly root: Element) {
    this.timer = document.createElement('div');
    this.timer.innerHTML = `
        <div class="base-timer">
          <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
              <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
              <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${this.remainingPathColor}"
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
              ></path>
            </g>
          </svg>
          <span id="base-timer-label" class="base-timer__label">${Timer.formatTime(this.timeLeft)}
          </span>
        </div>
        `;

    this.root.appendChild(this.timer);
  }

  onTimesUp() {
    clearInterval(this.timerInterval);
  }

  startTimer() {
    this.timerInterval = window.setInterval(() => {
      const newTime = this.timePassed + 1;
      //   timePassed = timePassed += 1;
      //   timeLeft = TIME_LIMIT - timePassed;
      this.timePassed = newTime;
      this.timeLeft = TIME_LIMIT - this.timePassed;
      document.getElementById('base-timer-label').innerHTML = Timer.formatTime(this.timeLeft);
      this.setCircleDasharray();
      Timer.setRemainingPathColor(this.timeLeft);

      if (this.timeLeft === 0) {
        this.onTimesUp();
      }
    }, 1000);
  }

  static formatTime(time: number) {
    // const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let secondsResult: string;

    if (seconds < 31) {
      secondsResult = `${seconds}`;
    }

    return `${secondsResult}`;
    // return `${minutes}:${secondsResult}`;
  }

  static setRemainingPathColor(timeLeft: number) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document.getElementById('base-timer-path-remaining').classList.remove(warning.color);
      document.getElementById('base-timer-path-remaining').classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document.getElementById('base-timer-path-remaining').classList.remove(info.color);
      document.getElementById('base-timer-path-remaining').classList.add(warning.color);
    }
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = `${(this.calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
    document
      .getElementById('base-timer-path-remaining')
      .setAttribute('stroke-dasharray', circleDasharray);
  }
}
