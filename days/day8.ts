import fs from 'fs';

export function part1(path: string): number {
    const entries = fs.readFileSync(path).toString().split('\n');
    let count = 0;

    for (let entry of entries) {
        let outputLine = entry.split(" | ")[1];

        count += outputLine.split(" ")
            .filter(str => [2,3,4,7].indexOf(str.length) > -1)
            .length;
    }

    return count;
}

export function part2(path: string): number {
    return 0;
}