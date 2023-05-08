import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const finishTime = selectedDates[0];
    const nowTime = new Date();
    if (finishTime < nowTime) {
      window.alert('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
    refs.startBtn.addEventListener('click', () => {
      refs.startBtn.disabled = true;
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        const leftTime = finishTime - currentTime;
        if (leftTime < 0) {
          clearInterval(intervalId);
          return;
        }
        const { days, hours, minutes, seconds } = convertMs(leftTime);
        console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
        updateTimerEl({ days, hours, minutes, seconds });
      }, 1000);
    });
  },
};

flatpickr('#datetime-picker', options);

function updateTimerEl({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  refs.secondsEl.textContent = `${seconds}`;
}
function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
