import { tetrominoesArray } from "./tetrominoes/index.js";
import { GRID_WIDTH } from './constants.js';

const boxList = document.querySelector('.box__list');
const squares = document.querySelectorAll('.block');

let currentPosition = 0;
let currentRotation = 0;
let timerId;

const randomTetromino = tetrominoesArray[Math.floor(Math.random() * tetrominoesArray.length)];

function drawTetromino() {
    randomTetromino[currentRotation].forEach(index => squares[currentPosition + index].classList.add('block__white'));
}

function removeTetromino() {
    randomTetromino[currentRotation].forEach(index => squares[currentPosition + index].classList.remove('block__white'));
}

function moveDown() {
    removeTetromino();
    currentPosition += GRID_WIDTH;
    drawTetromino();
}

function moveLeft() {
    removeTetromino();

    if (!isLeft()) {
        currentPosition--;
    }

    drawTetromino();
}

function moveRight() {
    removeTetromino();

    if (!isRight()) {
        currentPosition++;
    }

    drawTetromino();
}

function isRight() {
    return randomTetromino[currentRotation].some(
        index => (currentPosition + index) % GRID_WIDTH === GRID_WIDTH - 1
    );
}

function isLeft() {
    return randomTetromino[currentRotation].some(
        index => (currentPosition + index) % GRID_WIDTH === 0
    );
}

function rotate() {
    removeTetromino();
    currentRotation++;

    if (currentRotation === randomTetromino.length) {
        currentRotation = 0;
    }
    drawTetromino();
}

document.addEventListener('keyup', controlTetromino)



timerId = setInterval(() => {
    moveDown();
}, 1000);