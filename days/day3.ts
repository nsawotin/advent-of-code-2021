import { validate } from '@babel/types';
import fs from 'fs';

export function part1(path: string): number {
    const inputs = fs
        .readFileSync(path)
        .toString().split("\n")
        .map(line => line
            .replace(/\r$/, '')
        );

    // make an array to keep track of the sum of each "column"
    let sums = calculateSums(inputs);
    
    // calculate gamma
    let gamma = parseInt(sums.join(""), 2); // radix 2 to convert to binary

    // calculate epsilon
    sums = sums.map(sum => 1-sum); // flip each bit in sums
    let epsilon = parseInt(sums.join(""), 2);

    return gamma*epsilon;
}

export function part2(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split("\n")
        .map(line => line
            .replace(/\r$/, '')
        );

    // calculate oxygen generator rating
    let i=0;
    let inputsForOxygen = [...inputs];
    while(inputsForOxygen.length > 1) {
        let sums = calculateSums(inputsForOxygen);
        let filter = sums[i];
        inputsForOxygen = inputsForOxygen.filter(val => val.charAt(i) == filter);
        i++;
    }

    let ogr = parseInt(inputsForOxygen[0], 2);

    // calculate co2 scrubber rating
    i=0;
    let inputsForCO2 = [...inputs];
    while(inputsForCO2.length > 1) {
        let sums = calculateSums(inputsForCO2);
        let filter = sums[i];
        inputsForCO2 = inputsForCO2.filter(val => val.charAt(i) != filter);
        i++;
    }
    let csr = parseInt(inputsForCO2[0], 2);

    return ogr*csr;
}

/**
 * Returns an array where each element holds the most common value (0s or 1s)
 * in the same position of the incoming array, or 1 if there were an equal
 * number.
 * 
 * ie. inputs [00100, 11110, 10110]
 *     returns [1,0,1,1,0]
 */
function calculateSums(inputs: string[]): any[] {
    let sums = new Array(inputs[0].length).fill(0);
    let numRows = inputs.length;

    // sum up each column (ie. 00100, 11110, 10110 would return 21320)
    for (let binaryString of inputs) {
        for (let i = 0; i < binaryString.length; i++) {
            let bit = parseInt(binaryString[i]);
            sums[i] += bit;
        }
    }

    // if the sum of each column is > 1/2 the total # of rows,
    // 1 was more common, else 0 was more common. if there's an
    // equal number, default to 1.
    for (let i = 0; i < sums.length; i++) {
        sums[i] = sums[i] >= numRows/2 ? 1 : 0;
    } 

    return sums;
}