import { tetreminoDisplay, nextTetrominoColor } from './app.js';

const nextTetreminoBox = document.querySelector('.next__block--list');
let nextTetreminoBlocks = [...nextTetreminoBox.querySelectorAll('.next__block--item')];

export function dipslayTetremino() {
    tetreminoDisplay.forEach(index => {
        nextTetreminoBlocks[index].classList.add('block__white');
        nextTetreminoBlocks[index].style.backgroundColor = nextTetrominoColor;
    });
}

export function removeDisplayedTetromino() {
    tetreminoDisplay.forEach(index => {
        nextTetreminoBlocks[index].classList.remove('block__white');
        nextTetreminoBlocks[index].style.backgroundColor = '';
    });
}