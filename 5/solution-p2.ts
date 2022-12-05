import { readFileSync } from 'fs';

// read the input file
const inputArray = require('fs').readFileSync('input.txt', 'utf8').split('\n\n');


 // TODO: figure out a way to read this directly from the input, not assuming how many arrays/stacks there are.
const crates: any =[
    ['B', 'W', 'N'], 
    ['L', 'Z', 'S', 'P', 'T', 'D', 'M', 'B'], 
    ['Q', 'H', 'Z', 'W', 'R'],
    ['W', 'D', 'V', 'J', 'Z', 'R'],
    ['S', 'H', 'M', 'B'],
    ['L', 'G', 'N', 'J', 'H', 'V', 'P', 'B'],
    ['J', 'Q', 'Z', 'F', 'H', 'D', 'L', 'S'],
    ['W', 'S', 'F', 'J', 'G', 'Q', 'B'],
    ['Z', 'W', 'M', 'S', 'C', 'D', 'J']
 ];

const instructions = inputArray[1].split('\n');

for (let instruction of instructions) {

    let numbers = instruction.match( /\d+/g);

    const quantity = numbers[0];
    const cratesOrigin = numbers[1];
    const cratesDestination = numbers[2];

    // move the crates to the destination
    crates[cratesDestination - 1] = crates[cratesDestination - 1].concat(crates[cratesOrigin - 1].splice(-quantity));
}


// output the top item in each crate
crates.forEach((crate: string | any[]) => {
    console.log(crate[crate.length - 1]);
});