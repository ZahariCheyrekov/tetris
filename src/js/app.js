import { tetrominoesArray } from "./tetrominoes/index.js";
import { GRID_WIDTH } from './constants.js';

const boxList = document.querySelector('.box__list');
const squares = document.querySelectorAll('.block');

let currentPosition = 0;
let currentRotation = 0;
let timerId;

let randomTetromino = getRandomTetromino();
let tetreminoColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
let color = getRandomColor();

function getRandomTetromino() {
    return tetrominoesArray[Math.floor(Math.random() * tetrominoesArray.length)];
}

function getRandomColor() {
    return tetreminoColors[Math.floor(Math.random() * tetreminoColors.length)];
}

function drawTetromino() {
    randomTetromino[currentRotation].forEach(index => {
        squares[currentPosition + index].classList.add('block__white');
        squares[currentPosition + index].style.backgroundColor = color;
    });
}

function removeTetromino() {
    randomTetromino[currentRotation].forEach(index => {
        squares[currentPosition + index].classList.remove('block__white')
        squares[currentPosition + index].style.backgroundColor = '';
    });
}

function moveDown() {
    removeTetromino();
    currentPosition += GRID_WIDTH;
    drawTetromino();
    positionTetromino();
}

function positionTetromino() {
    if (randomTetromino[currentRotation].some(
        index => squares[currentPosition + index + GRID_WIDTH].classList.contains('end')
    )) {
        randomTetromino[currentRotation].forEach(
            index => {
                squares[currentPosition + index].classList.add('end')
            }
        );

        currentPosition = 0;
        currentRotation = 0;
        color = getRandomColor();
        randomTetromino = getRandomTetromino();
        drawTetromino();
    }
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

    console.log(isRight());
    if (!isRight()) {
        currentPosition++;
    }

    drawTetromino();
}

function isRight() {
    return randomTetromino[currentRotation].some(
        index => (currentPosition + index) % GRID_WIDTH === GRID_WIDTH - 1
    ) || randomTetromino[currentRotation].some(
        index => squares[currentPosition + index + 1].classList.contains('end'));
}

function isLeft() {
    return randomTetromino[currentRotation].some(
        index => (currentPosition + index) % GRID_WIDTH === 0
    ) || randomTetromino[currentRotation].some(
        index => squares[currentPosition + index - 1].classList.contains('end'));
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

function controlTetromino(event) {
    if (event.keyCode === 37) {
        moveLeft();
    } else if (event.keyCode === 38) {
        rotate();
    } else if (event.keyCode === 39) {
        moveRight();
    } else if (event.keyCode === 40) {
        moveDown();
    }
}

timerId = setInterval(() => {
    moveDown();
}, 1000);