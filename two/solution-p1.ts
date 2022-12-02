import { readFileSync } from 'fs';

const inputArray = readFileSync('./input.txt', 'utf-8').split('\n');

// a|x rock, b|y paper, c|z scissors
// 1 point for rock, 2 for paper, 3 for scissors
// 0 for loss, 3 for draw, 6 for win.
// calculate score following input.

let score = 0;

for (let match of inputArray) {

    const opponentMove = match.charAt(0);
    const myMove = match.charAt(2);

    if (opponentMove === "A") {
        if (myMove === "X") {
            score += 4; // 1 (rock) + 3 (draw)
        } else if (myMove === "Y") {
            score += 8; // 2 (paper) + 6 (win)
        } else {
            score += 3; // 3 (scissors) + 0 (loss)
        }
    } else if (opponentMove === "B") {
        if (myMove === "X") {
            score += 1;// 1 (rock) + 0 (loss)
        } else if (myMove === "Y") {
            score += 5; // 2 (paper) + 3 (draw)
        } else {
            score += 9; // 3 (scissors) + 6 (win)
        }
    } else {
        if (myMove === "X") {
            score += 7; // 1 (rock) + 6 (win)
        } else if (myMove === "Y") {
            score += 2; // 2 (paper) + 0 (loss)
        } else {
            score += 6; // 3 (scissors) + 3 (draw)
        }
    }
}

// answer
console.log(score);