import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  buttonEl: document.querySelector('button'),
  timerEl: document.querySelector('.timer'),
  day: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
refs.buttonEl.disabled = true;

let currentDate = null
let userSelectedDate = null;
console.log(currentDate);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      refs.buttonEl.disabled = true;
      window.alert('Please choose a date in the future');
      return;
    }
    refs.buttonEl.disabled = false;
    userSelectedDate = selectedDates[0];
  },
};
flatpickr('input[type = text]', options);



refs.buttonEl.addEventListener('click', start);
console.log(userSelectedDate);
function start() {
  refs.buttonEl.disabled = true;
  intervalId = setInterval(() => {
    const datePassed = userSelectedDate - new Date()
    console.log(datePassed)
    const time = convertMs(datePassed);
    addTimeCounter(time);
    if (datePassed < 1000) {
      clearInterval(intervalId);
    }
    return;
  }, 1000);
  
}
function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}
  function addTimeCounter({ days, hours, minutes, seconds }) {
    refs.day.textContent = addLeadingZero(days)
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  };

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

