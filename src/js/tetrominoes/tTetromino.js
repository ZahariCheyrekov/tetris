import { GRID_WIDTH, START_POSITION } from "../constants.js";

export const tTetromino = [
    [
        START_POSITION + GRID_WIDTH,
        START_POSITION + 1,
        START_POSITION + 1 + GRID_WIDTH,
        START_POSITION + 1 + GRID_WIDTH * 2
    ],
    [
        START_POSITION + 1,
        START_POSITION + GRID_WIDTH,
        START_POSITION + GRID_WIDTH + 1,
        START_POSITION + GRID_WIDTH + 2,
    ],
    [
        START_POSITION + 1,
        START_POSITION + 1 + GRID_WIDTH,
        START_POSITION + 1 + GRID_WIDTH * 2,
        START_POSITION + 2 + GRID_WIDTH
    ],
    [
        START_POSITION + GRID_WIDTH,
        START_POSITION + 1 + GRID_WIDTH,
        START_POSITION + 2 + GRID_WIDTH,
        START_POSITION + 1 + GRID_WIDTH * 2
    ],
];