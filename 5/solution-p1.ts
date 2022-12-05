import { readFileSync } from 'fs';

/**
    [B]             [B] [S]        
    [M]             [P] [L] [B] [J]
    [D]     [R]     [V] [D] [Q] [D]
    [T] [R] [Z]     [H] [H] [G] [C]
    [P] [W] [J] [B] [J] [F] [J] [S]
[N] [S] [Z] [V] [M] [N] [Z] [F] [M]
[W] [Z] [H] [D] [H] [G] [Q] [S] [W]
[B] [L] [Q] [W] [S] [L] [J] [W] [Z]
 1   2   3   4   5   6   7   8   9 

 */

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

// read the input file
const instructions = require('fs').readFileSync('input.txt', 'utf8').split('\n');

for (let instruction of instructions) {

    let numbers = instruction.match( /\d+/g);

    const quantity = numbers[0];
    const cratesOrigin = numbers[1];
    const cratesDestination = numbers[2];

    // move the crates one at a time
    for (let i = 0; i < quantity; i++) {
        const crate = crates[cratesOrigin - 1].pop();
        crates[cratesDestination - 1].push(crate);
    }
}

// output the top item in each crate
crates.forEach((crate: string | any[]) => {
    console.log(crate[crate.length - 1]);
});