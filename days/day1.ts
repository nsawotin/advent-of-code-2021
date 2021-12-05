import fs from 'fs';

export function part1(path: string): number {
    const array = fs.readFileSync(path).toString().split("\n");

    let count = -1;
    let last = 0;
    for (let a of array) {
        if(parseInt(a) > last) {
            count++;
        }
        last = parseInt(a);
    }

    return count;
}

export function part2(path: string): number {
    const array = fs.readFileSync(path).toString().split("\n");

    let count = -1;
    let last = 0;
    for (let i = 0; i < array.length; i++) {
        if(i+2 < array.length)
        {
            let current = parseInt(array[i]);
            let plus1 = parseInt(array[i+1]);
            let plus2 = parseInt(array[i+2]);

            let sum = current + plus1 + plus2;

            if(sum > last) {
                count++;
            }
            last = sum;
        }
      }

    return count;
}