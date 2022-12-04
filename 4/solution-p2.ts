import { readFileSync } from 'fs';

// read the input file
const inputArray = require('fs').readFileSync('input.txt', 'utf8').split('\n');

let supersets = 0;

for (let rangePair of inputArray) {
    
    const singleRange = rangePair.split(',');
    const firstElf = singleRange[0].split('-');
    const secondElf = singleRange[1].split('-');

    const firstElfRange = Array.from({length: (parseInt(firstElf[1]) - parseInt(firstElf[0])) + 1}, (v, k) => k + parseInt(firstElf[0]));
    const secondElfRange = Array.from({length: (parseInt(secondElf[1]) - parseInt(secondElf[0])) + 1}, (v, k) => k + parseInt(secondElf[0]));

    // check if any part of the arrays overlap
    if (firstElfRange.some((value) => secondElfRange.includes(value))) {
        supersets++;
    }
}

console.log("answer: " , supersets);