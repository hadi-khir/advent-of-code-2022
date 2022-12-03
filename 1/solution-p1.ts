import { readFileSync } from 'fs';

const inputArray = readFileSync('./input.txt', 'utf-8').split('\n');

let highestVal = 0;
let currentSum = 0;

for (let calorie of inputArray) {

    if (calorie === '') {

        // end of group, check if current sum is > highestVal
        if (currentSum >= highestVal) {
            highestVal = currentSum;
        }

        // get ready for next group.
        currentSum = 0;
    }
    currentSum += Number(calorie);
}

// answer
console.log(currentSum);