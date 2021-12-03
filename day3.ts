import fs from 'fs';

const inputPath = "./Inputs/day3.txt"

export function part1(path: string): number {
    const inputs = fs.readFileSync(path).toString().split("\n");

    // TODO

    return 0;
}

export function part2(path: string): number {
    const array = fs.readFileSync(path).toString().split("\n");

    // TODO
    
    return 0;
}

console.log(`Part 1 Answer: ${part1(inputPath)}`);
console.log(`Part 2 Answer: ${part2(inputPath)}`);