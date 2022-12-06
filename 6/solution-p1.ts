import { readFileSync } from 'fs';

// read the input file
const input = require('fs').readFileSync('input.txt', 'utf8');

// read the input file four characters at a time
for (let i = 0; i<input.length; i++) {
    
    let characters: string[] = [];

    // cheack the next four characters and see if there is a match
    for (let j = i; j< i + 4; j++) {

        if (characters.includes(input[j])) {

            characters = [];
            break;
        } else {

            characters.push(input[j]);

            if (characters.length === 4) {
                console.log(characters.join(''));
                console.log(j+1);

                // exit the loop
                i = input.length;
            }
        }
    }
}