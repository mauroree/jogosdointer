const seg = 1000; // 1000ms = 1s
const min = seg * 60;
const hora = min * 60;
const dia = hora * 24;

let count_down = new Date('10/16/2022 18:00:00').getTime();
let x = setInterval(() => countDown(), seg);

function countDown() {

  let now = new Date(Date.now()).getTime();
  let diferenca = count_down - now;

  if (diferenca < 0) { //se for <0 zera a contagem

    document.getElementById('dias').innerText = 0;
    document.getElementById('horas').innerText = 0;
    document.getElementById('minutos').innerText = 0;
    document.getElementById('segundos').innerText = 0;

  } else {

    document.getElementById('dias').innerText = Math.floor(diferenca / dia);
    document.getElementById('horas').innerText = Math.floor(diferenca % dia / hora);
    document.getElementById('minutos').innerText = Math.floor(diferenca % hora / min);
    document.getElementById('segundos').innerText = Math.floor(diferenca % min / seg);

  }

}