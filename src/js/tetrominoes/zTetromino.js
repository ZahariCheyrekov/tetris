import { GRID_WIDTH, START_POSITION } from "../constants.js";

export const zTetromino = [
    [
        START_POSITION,
        START_POSITION + 1,
        START_POSITION + 1 + GRID_WIDTH,
        START_POSITION + 2 + GRID_WIDTH
    ],
    [
        START_POSITION + 1,
        START_POSITION + 1 + GRID_WIDTH,
        START_POSITION + GRID_WIDTH,
        START_POSITION + GRID_WIDTH * 2,
    ],
];