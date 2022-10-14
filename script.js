const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('10/13/2022 16:05:10').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {

  let now = new Date(Date.now()).getTime();
  let diferenca = count_down - now;

  if (diferenca < 0) {

    stop();

  } else {

    document.getElementById('days').innerText = Math.floor(diferenca / day);
    document.getElementById('hours').innerText = Math.floor(diferenca % day / hour);
    document.getElementById('minutes').innerText = Math.floor(diferenca % hour / minute);
    document.getElementById('seconds').innerText = Math.floor(diferenca % minute / second);

  }

}