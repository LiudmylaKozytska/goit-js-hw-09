// Описаний в документації
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  min: document.querySelector('[data-minutes]'),
  sec: document.querySelector('[data-seconds]'),
};

refs.btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = Number(selectedDates[0]);
    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.btn.disabled = false;
      refs.btn.addEventListener('click', () => {
        const timerId = setInterval(() => {
          const delta = selectedDate - new Date();
          if (delta >= 0) {
            convertMs(delta);
            console.log(convertMs(delta));
          } else {
            clearInterval(timerId);
          }
        }, 1000);
        refs.btn.disabled = true;
      });
    }
  },
};

flatpickr(refs.input, options);

function addZero(value) {
  return String(value).padStart(2, '0');
}

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

  refs.days.innerText = addZero(days);
  refs.hours.innerText = addZero(hours);
  refs.min.innerText = addZero(minutes);
  refs.sec.innerText = addZero(seconds);

  return { days, hours, minutes, seconds };
}
