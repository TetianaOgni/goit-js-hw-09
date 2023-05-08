const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

let timerId = null;

function onStartBtn(event) {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = randomColor;
  }, 1000);

  event.target.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopBtn(event) {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  event.target.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
