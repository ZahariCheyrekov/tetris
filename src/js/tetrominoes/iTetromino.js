import { GRID_WIDTH, START_POSITION } from "../constants.js";

export const iTetromino = [
    [
        START_POSITION + 1,
        START_POSITION + 1 + GRID_WIDTH,
        START_POSITION + 1 + GRID_WIDTH * 2,
        START_POSITION + 1 + GRID_WIDTH * 3,
    ],
    [
        START_POSITION - 1,
        START_POSITION,
        START_POSITION + 1,
        START_POSITION + 2,
    ]
];