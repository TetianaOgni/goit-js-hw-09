const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

let timerId = null;

function onStartBtn() {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = randomColor;
  }, 1000);
  changeDisabled(true);
}

function onStopBtn() {
  clearInterval(timerId);
  changeDisabled(false);
}

function changeDisabled(value) {
  refs.startBtn.disabled = value;
  refs.stopBtn.disabled = !value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
