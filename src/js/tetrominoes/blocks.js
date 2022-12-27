import { START, DISPLAY_WIDTH } from "../constants.js";

export const blocks = [
    // iTetromino
    [START, DISPLAY_WIDTH + START, DISPLAY_WIDTH * START + START, DISPLAY_WIDTH * 3 + START],

    // jTetromino
    [START, DISPLAY_WIDTH + START, DISPLAY_WIDTH * START + START, DISPLAY_WIDTH * START + 1],

    // lTetromino
    [1, DISPLAY_WIDTH + 1, DISPLAY_WIDTH * START + 1, DISPLAY_WIDTH * START + START],

    // oTetromino
    [1, START, DISPLAY_WIDTH + 1, DISPLAY_WIDTH + START],

    // sTetromino
    [1, DISPLAY_WIDTH + 1, DISPLAY_WIDTH + START, DISPLAY_WIDTH * START + START]

    // tTetromino
    [START, DISPLAY_WIDTH + 1, DISPLAY_WIDTH + START, DISPLAY_WIDTH * START + START],

    // zTetromino
    [DISPLAY_WIDTH + 1, DISPLAY_WIDTH + START, DISPLAY_WIDTH * START + START, DISPLAY_WIDTH * START + 3],
];

export function getTetreminoToDisplay(randomIndex) {
    return blocks[randomIndex];
}