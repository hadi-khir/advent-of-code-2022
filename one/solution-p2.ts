import { readFileSync } from 'fs';

const inputArray = readFileSync('./input.txt', 'utf-8').split('\n');

let values = [];
let currentSum = 0;
let topThree = 0;

for (let calorie of inputArray) {

    if (calorie === '') {

        // end of group, add sum to values
        values.push(currentSum);

        // get ready for next group.
        currentSum = 0;
    }
    currentSum += Number(calorie);
}

values.sort((a, b) => b - a);
for (let i = 0; i<3; i++) {
    topThree += values[i];
}

// answer
console.log(topThree);