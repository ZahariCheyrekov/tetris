import { tetrominoesArray } from "./tetrominoes/index.js";
import { GRID_WIDTH, TETROMINO_COLORS } from './constants.js';
import { getTetreminoToDisplay } from './tetrominoes/blocks.js';
import { dipslayTetremino, removeDisplayedTetromino } from "./nextTetromino.js";

const boxList = document.querySelector('.box__list');
let squares = [...boxList.querySelectorAll('.block')];

let currentPosition = 0;
let currentRotation = 0;
let timerId;

let randomIndex = getRandomIndex();
let randomTetromino = tetrominoesArray[Math.floor(Math.random() * tetrominoesArray.length)];
let color = getRandomColor();

let nextTetromino = getRandomTetromino();
export let nextTetrominoColor = getRandomColor();
export let tetreminoDisplay = getTetreminoToDisplay(randomIndex);

function getRandomIndex() {
    return Math.floor(Math.random() * tetrominoesArray.length);
}

function getRandomTetromino() {
    return tetrominoesArray[randomIndex];
}

function getRandomColor() {
    return TETROMINO_COLORS[Math.floor(Math.random() * TETROMINO_COLORS.length)];
}

function drawTetromino() {
    randomTetromino[currentRotation].forEach(index => {
        squares[currentPosition + index].classList.add('block__white');
        squares[currentPosition + index].style.backgroundColor = color;
    });

    checkGameOver();
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

function placeDown() {
    while (!randomTetromino[currentRotation].some(
        index => squares[currentPosition + index + GRID_WIDTH].classList.contains('end'))) {

        removeTetromino();
        currentPosition += GRID_WIDTH;
        drawTetromino();
    }

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

        randomTetromino = nextTetromino;
        randomIndex = getRandomIndex();
        nextTetromino = getRandomTetromino();
        color = nextTetrominoColor;
        nextTetrominoColor = getRandomColor();

        removeDisplayedTetromino();
        tetreminoDisplay = getTetreminoToDisplay(randomIndex);
        dipslayTetremino();


        clearRow();
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

function clearRow() {
    for (let i = 200; i >= 0; i -= 10) {
        let sqrs = squares.slice(i - 10, i);
        const isContained = sqrs.every(sqr => sqr.classList.contains('block__white'));

        if (isContained && sqrs.length > 0) {
            sqrs.forEach(sqr => {
                sqr.classList.remove('block__white');
                sqr.classList.remove('end');
                sqr.style.backgroundColor = '';
            });

            let squaresToRemove = squares.splice(i - GRID_WIDTH, GRID_WIDTH);
            boxList.prepend(...squaresToRemove);
        }
    }

    squares = [...boxList.querySelectorAll('.block')];
}

function checkGameOver() {
    const isGameOver = squares.slice(10, 20).some(square => square.classList.contains('end'));

    if (isGameOver) {
        alert('Game Over');
        currentPosition = 0;
        currentRotation = 0;
        squares = [...boxList.querySelectorAll('.block')];
        color = getRandomColor();
        randomTetromino = getRandomTetromino();
        clearTetrisBox();
    }
}

function clearTetrisBox() {
    squares.slice(0, 200).forEach(square => {
        square.classList.remove('end');
        square.classList.remove('block__white');
        square.style.backgroundColor = '';
    });
}

document.addEventListener('keyup', controlTetromino);

function controlTetromino(event) {
    if (event.keyCode === 37) {
        moveLeft();
    } else if (event.keyCode === 38) {
        rotate();
    } else if (event.keyCode === 39) {
        moveRight();
    } else if (event.keyCode === 40) {
        moveDown();
    } else if (event.keyCode === 32) {
        placeDown();
    }
}

dipslayTetremino();
drawTetromino();
timerId = setInterval(() => {
    moveDown();
}, 1000);