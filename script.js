const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('09/10/2022 16:00:00').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {

  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById('days').innerText = Math.floor(diff / day);
  document.getElementById('hours').innerText = Math.floor(diff % day / hour);
  document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);
  document.getElementById('seconds').innerText = Math.floor(diff % minute / second);
}

function resetCountdown() {
  clearInterval(x);
  count_down = new Date('09/09/2022 16:00:00').getTime();
  x = setInterval(() => countDown(), second);
}