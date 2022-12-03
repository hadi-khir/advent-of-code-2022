import { readFileSync } from 'fs';

const inputArray = readFileSync('./input.txt', 'utf-8').split('\n');

// a rock, b paper, c scissors
// x lose, y draw, z lose
// 1 point for rock, 2 for paper, 3 for scissors
// 0 for loss, 3 for draw, 6 for win.
// calculate score following input.

let score = 0;

for (let match of inputArray) {

    const opponentMove = match.charAt(0);
    const roundResult = match.charAt(2);

    if (opponentMove === "A") {
        if (roundResult === "X") {
            score += 3; // 0 (loss) + 3 (scissors)
        } else if (roundResult === "Y") {
            score += 4; // 3 (draw) + 1 (rock)
        } else {
            score += 8; // 6 (win) + 2 (paper)
        }
    } else if (opponentMove === "B") {
        if (roundResult === "X") {
            score += 1; // 0 (loss) + 1 (rock)
        } else if (roundResult === "Y") {
            score += 5; // 3 (draw) + 2 (paper)
        } else {
            score += 9; // 6 (win) +  3 (scissors)
        }
    } else {
        if (roundResult === "X") {
            score += 2; // 0 (loss) + 2 (paper)
        } else if (roundResult === "Y") {
            score += 6; // 3 (draw) + 3 (scissors)
        } else {
            score += 7; // 6 (win) + 1 (rock)
        }
    }
}

// answer
console.log(score);