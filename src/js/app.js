import { tetrominoesArray } from "./tetrominoes/index.js";
import { GRID_WIDTH } from './constants.js';

const boxList = document.querySelector('.box__list');
const squares = document.querySelectorAll('.block');

let currentPosition = 0;
let currentRotation = 0;
let timerId;

const randomTetromino = tetrominoesArray[Math.floor(Math.random() * tetrominoesArray.length)][currentRotation];

function drawTetromino() {
    randomTetromino.forEach(index => squares[currentPosition + index].classList.add('block__white'));
}

function removeTetromino() {
    randomTetromino.forEach(index => squares[currentPosition + index].classList.remove('block__white'));
}

function start() {
    removeTetromino();
    currentPosition += GRID_WIDTH;
    drawTetromino();
}

timerId = setInterval(() => {
    start();
}, 1000);