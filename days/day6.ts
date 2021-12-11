import fs from 'fs';

export function part1(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split(",")
        .map(Number);

    const numDays = 80;
    let total = [...inputs];

    for (let i = 0; i < numDays; i++) {
        inputs.map((value, index) => {
            if(value !== 0) {
                let newValue = value-1;
                total[index] = newValue;
            } else {
                if (value === 0) {
                    total[index] = 6;
                    total.push(8);
                }
            }
        });

        inputs = [...total];
    }

    return total.length;
}

export function part2(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split(",")
        .map(Number);

    // TODO

    return 0;
}