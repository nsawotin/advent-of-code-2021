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

export function part2(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split("\n");

        // TODO
        
       return 0;
}
