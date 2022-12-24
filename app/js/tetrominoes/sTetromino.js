import { GRID_WIDTH, START_POSITION } from "../constants.js";

export const sTetromino = [
    [
        START_POSITION + GRID_WIDTH,
        START_POSITION + GRID_WIDTH + 1,
        START_POSITION + 1,
        START_POSITION + 2,
    ],
    [
        START_POSITION,
        START_POSITION + GRID_WIDTH,
        START_POSITION + GRID_WIDTH + 1,
        START_POSITION + GRID_WIDTH * 2 + 1,
    ]
];