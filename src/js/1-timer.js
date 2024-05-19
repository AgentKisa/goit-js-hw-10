import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.error({
        title: 'Please choose a date in the future',
        position: 'topRight',
      });
      start.setAttribute('disabled', '');
      return;
    }
    userSelectedDate = selectedDates[0];
    start.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);

const start = document.querySelector('button[data-start]');
start.setAttribute('disabled', '');

start.addEventListener('click', startTime);
const timer24 = document.querySelector('.value');
let userSelectedDate;

function startTime() {
  start.setAttribute('disabled', '');
  document.querySelector('#datetime-picker').setAttribute('disabled', '');
  let intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = userSelectedDate - currentTime;

    if (deltaTime <= 0) {
      clearInterval(intervalId);
      document.querySelector('#datetime-picker').removeAttribute('disabled');
      start.setAttribute('disabled', '');
      return;
    }
    let ms = convertMs(deltaTime);
    onTick(ms);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function onTick({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = pad(days);
  document.querySelector('[data-hours]').textContent = pad(hours);
  document.querySelector('[data-minutes]').textContent = pad(minutes);
  document.querySelector('[data-seconds]').textContent = pad(seconds);
}
