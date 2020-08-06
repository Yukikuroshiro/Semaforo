const red = document.getElementById('turnRed');
const green = document.getElementById('turnGreen');
const yellow = document.getElementById('turnYellow');
const auto = document.getElementById('turnAuto');
const smfr = document.getElementById('smfr');

function clearAuto() {
    clearInterval(turnAuto);
}

function turnRedAuto() {
    smfr.src = './img/vermelho.png';
}

function turnGreenAuto() {
    smfr.src = './img/verde.png';
}

function turnYellowAuto() {
    smfr.src = './img/amarelo.png';
}

function turnAuto() {
    setTimeout(turnRedAuto, 1000);
    setTimeout(turnYellowAuto, 2000);
    setTimeout(turnGreenAuto, 3000);

    setInterval(turnAuto, 4000);
}

function turnRed() {
    clearAuto();
    smfr.src = './img/vermelho.png';
}

function turnGreen() {
    smfr.src = './img/verde.png';
}

function turnYellow() {
    smfr.src = './img/amarelo.png';
}

red.addEventListener('click', turnRed);
green.addEventListener('click', turnGreen);
yellow.addEventListener('click', turnYellow);
auto.addEventListener('click', turnAuto);