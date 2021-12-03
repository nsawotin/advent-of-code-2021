import fs from 'fs';

const inputPath = "./Inputs/day2.txt"

export function part1(path: string): number {
    const array = fs.readFileSync(path).toString().split("\n");

    let horizontal = 0;
    let depth = 0;

    for (let a of array) {
        let parts = a.split(" ", 2); 
        const amount = parseInt(parts[1]);

        if(parts[0] == "forward") {
            // adjust hor
            horizontal += amount;
        } else {
            // adjust vert
            if(parts[0] == "down") {
                depth += amount;
            } else {
                depth -= amount;
            }
        }
    }

    return horizontal * depth;
}

export function part2(path: string): number {
    const array = fs.readFileSync(path).toString().split("\n");

    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for (let a of array) {
        let parts = a.split(" ", 2); 
        const amount = parseInt(parts[1]);

        if(parts[0] == "forward") {
            // adjust hor
            horizontal += amount;
            depth += (aim*amount);
        } else {
            // adjust vert
            if(parts[0] == "down") {
                aim += amount;
            } else {
                aim -= amount;
            }
        }
    }

    return horizontal * depth;
}

console.log(`Part 1 Answer: ${part1(inputPath)}`);
console.log(`Part 2 Answer: ${part2(inputPath)}`);