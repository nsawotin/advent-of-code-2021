import fs from 'fs';

export function part1(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split("\n");

        let diagram: number[][] = [];
        let lows = [];

        // fill our grid, padding it with 10s on all sides to avoid any out-of-bounds issues
        diagram[0] = [].fill.call({ length: inputs[0].length+2 }, 10);
        for (let i = 0; i < inputs.length; i++) {
            let str = inputs[i];
            diagram[i+1] = str.split('').map(Number);
            diagram[i+1].unshift(10);
            diagram[i+1].push(10);
        }
        diagram.push([].fill.call({ length: inputs[0].length+2 }, 10));

        // loop through our grid finding the lowest numbers
        for (let row = 1; row < diagram.length-1; row++) {
            for (let col = 1; col <= diagram[row].length - 2; col++) {
                if (diagram[row][col] < diagram[row][col+1] && // right
                    diagram[row][col] < diagram[row-1][col] && // up
                    diagram[row][col] < diagram[row][col-1] && // left
                    diagram[row][col] < diagram[row+1][col]) { // down
                        lows.push(diagram[row][col] + 1); // add 1 here to the value for final sum
                    }
            }
        }

        return lows.reduce((sum, current) => sum + current, 0);
}

let alreadyCounted = [];

/**
 * Looks at the 4 numbers surrounding the passed number (row & col), and
 * returns the count of any that are not equal to 9, and haven't already
 * been counted.
 **/
function CountSurrounding(diagram: number[][], row: number, col: number): number
{
    let count = 0;
    let surrounding = [];

     // right
    if((diagram[row][col+1] !== 9) && !alreadyCounted.some(a => a.toString() === `${row},${col+1}`)) {
        surrounding.push([row, col+1]);
    };

    // up
    if((diagram[row-1][col] !== 9) && !alreadyCounted.some(a => a.toString() === `${row-1},${col}`)) {
        surrounding.push([row-1, col]);
    }; 

     // left
    if((diagram[row][col-1] !== 9) && !alreadyCounted.some(a => a.toString() === `${row},${col-1}`)) {
        surrounding.push([row, col-1]);
    };

     // down
    if((diagram[row+1][col] !== 9) && !alreadyCounted.some(a => a.toString() === `${row+1},${col}`)) {
        surrounding.push([row+1, col]);
    };

    // mark the surrounding before further recursion to prevent counting any more than once
    for(const s of surrounding) {
        alreadyCounted.push([s[0], s[1]]);
    }

    count += surrounding.length;
    for(const s of surrounding) {
        count += CountSurrounding(diagram, s[0], s[1]);
    }

    return count;
}

export function part2(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split("\n");

        let diagram: number[][] = [];
        let basinSizes = [];
        let basinSize = 0;

        // fill our grid, padding it with 9s on all sides to avoid any out-of-bounds issues
        diagram[0] = [].fill.call({ length: inputs[0].length+2 }, 9);
        for (let i = 0; i < inputs.length; i++) {
            let str = inputs[i];
            diagram[i+1] = str.split('').map(Number);
            diagram[i+1].unshift(9);
            diagram[i+1].push(9);
        }
        diagram.push([].fill.call({ length: inputs[0].length+2 }, 9));

        // loop through our grid finding the basins
        for (let row = 1; row < diagram.length-1; row++) {
            for (let col = 1; col <= diagram[row].length - 2; col++) {
                if(diagram[row][col] !== 9 &&
                  !alreadyCounted.some(a => a.toString() === `${row},${col}`)) {
                    alreadyCounted.push([row, col]);
                    basinSize += 1;
                    basinSize += CountSurrounding(diagram, row, col);
                    basinSizes.push(basinSize);
                    basinSize = 0;
                }
            }
        }

        // multiply the top 3 largest basin sizes together
        return basinSizes
            .sort((a, b) => (a > b ? -1 : 1))
            .slice(0, 3)
            .reduce((x, y) => x*y);
}
