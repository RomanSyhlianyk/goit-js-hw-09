const refs = {
  buttonStartEl: document.querySelector('button[data-start]'),
  buttonStopEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = 0;

refs.buttonStopEl.addEventListener('click', ofChangeColors);
refs.buttonStartEl.addEventListener('click', onChangeColors);

function onChangeColors() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 2000);
  refs.buttonStartEl.disabled = true;
  refs.buttonStopEl.disabled = false;
}

function ofChangeColors(e) {
  clearInterval(timerId);
  refs.buttonStopEl.disabled = true;
  refs.buttonStartEl.disabled = false;
}
