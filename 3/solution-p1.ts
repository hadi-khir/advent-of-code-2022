import { readFileSync } from 'fs';

// read input file
const inputArray = readFileSync('./input.txt', 'utf-8').split('\n');

let sumOfPriorities = 0;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// loop through each line of input
for (let line of inputArray) {

    // split line into two equal halves
    const lineLength = line.length;
    const firstIndex = 0;
    const secondIndex = lineLength / 2;
    const firstHalf = line.slice(firstIndex, secondIndex);
    const secondHalf = line.slice(secondIndex, lineLength);

    // find the duplicate character
    for (let char of firstHalf) {
        if (secondHalf.includes(char)) {
            console.log(char);

            // determine case of character
            if (char === char.toUpperCase()) {

                // determine index of character in alphabet and double it
                sumOfPriorities += alphabet.indexOf(char.toLowerCase()) + 27;
            } else {

                sumOfPriorities += alphabet.indexOf(char) + 1;
            }

            // break out of loop
            break;
        }
    }
}

// answer
console.log(sumOfPriorities);