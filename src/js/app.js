import { iTetromino } from "./tetrominoes/iTetromino.js";
import { jTetromino } from "./tetrominoes/jTetromino.js";
import { lTetromino } from "./tetrominoes/LTetromino.js";
import { oTetromino } from "./tetrominoes/oTetromino.js";
import { sTetromino } from "./tetrominoes/sTetromino.js";
import { tTetromino } from "./tetrominoes/tTetromino.js";
import { zTetromino } from "./tetrominoes/zTetromino.js";

const boxList = document.querySelector('.box__list');
const squares = document.querySelectorAll('.block');


function displayTetromino() {
    oTetromino[0].forEach(index => squares[index].classList.add('block__white'));
}

displayTetromino();