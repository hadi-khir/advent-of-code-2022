import { readFileSync } from 'fs';

// read input file
const inputArray = readFileSync('./input.txt', 'utf-8').split('\n');

let sumOfPriorities = 0;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// create an array to store the current group strings 
let currentGroup : string[] = [];

// loop through input grabbing every 3 elements until finished
for (let i = 0; i < inputArray.length; i++) {
    
    currentGroup.push(inputArray[i]);

    // check if we have 3 elements in the current group
    if (currentGroup.length === 3) {

        // we have our first group, now we can check for the duplicate character
        for (let char of currentGroup[0]) {

            if (currentGroup[1].includes(char) && currentGroup[2].includes(char)) {

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
        currentGroup = [];
    }
}

// answer
console.log(sumOfPriorities);