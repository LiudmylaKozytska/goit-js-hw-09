function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const background = document.querySelector('body');

// 1-st variant
// let timerId = null;

// btnStart.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     background.style.backgroundColor = getRandomHexColor();
//   }, 1000);
//   btnStart.disabled = 'true';
//   btnStop.removeAttribute('disabled');
// });

// btnStop.addEventListener('click', () => {
//   clearInterval(timerId);
//   btnStart.removeAttribute('disabled');
//   btnStop.disabled = 'true;';
// });

// 2-d variant
const changeColor = {
  timerId: null,
  isActive: false,

  colorStart() {
    this.isActive = true;
    if (this.isActive) {
      btnStart.disabled = 'true';
      btnStop.removeAttribute('disabled');
    }

    this.timerId = setInterval(() => {
      background.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },

  colorStop() {
    this.isActive = false;
    clearInterval(this.timerId);
    btnStart.removeAttribute('disabled');
    btnStop.disabled = 'true';
  },
};

btnStart.addEventListener('click', () => {
  changeColor.colorStart();
});
btnStop.addEventListener('click', () => {
  changeColor.colorStop();
});
