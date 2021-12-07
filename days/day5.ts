import fs from 'fs';

export function part1(path: string): number {
    const inputs = fs
        .readFileSync(path)
        .toString().split("\n")
        .map(line => line
            .replace(/\r$/, '')
        );

        // TODO

        return 0;
}

export function part2(path: string): number {
    const inputs = fs
        .readFileSync(path)
        .toString().split("\n")
        .map(line => line
            .replace(/\r$/, '')
        );

        // TODO

        return 0;
}