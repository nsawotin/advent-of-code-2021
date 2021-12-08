import fs from 'fs';

export function part1(path: string): number {
    const inputs = fs
        .readFileSync(path)
        .toString().split("\n");

    let diagram: number[][] = [];

    for (let i of inputs) {
        let parts = i.split(" -> ", 2);
        let [x1, y1] = parts[0].split(',').map(Number);
        let [x2, y2] = parts[1].split(',').map(Number);

        // we ignore diagonal lines for now
        if(x1 !== x2 && y1 === y2) { 
            // build our range of x points. ie. if 9,4 -> 3,4 then xPoints=3,4,5,6,7,8,9
            let xPoints = Array.apply(null, {length: Math.max(x1,x2) + 1}).map(Number.call, Number).slice(Math.min(x1,x2));
            MarkHorizontal(xPoints, diagram, y1);
        } else if(y1 !== y2 && x1 === x2) {
            // build our range of y points. ie. if 7,0 -> 7,4 then yPoints=0,1,2,3,4
            let yPoints = Array.apply(null, {length: Math.max(y1,y2) + 1}).map(Number.call, Number).slice(Math.min(y1,y2));
            MarkVertical(yPoints, diagram, x1);
        } 
    }

    // how many points were hit >= 2 times
    return diagram.flat().filter(x => x >= 2).length;
}

export function part2(path: string): number {
    const inputs = fs
        .readFileSync(path)
        .toString().split("\n");

        let diagram: number[][] = [];
        const range = (x2: number, x1: number) => Array.from({ length: x1 - x2 + 1 }, (_, i) => x2 + i);

        for (let i of inputs) {
            let parts = i.split(" -> ", 2);
            let [x1, y1] = parts[0].split(',').map(Number);
            let [x2, y2] = parts[1].split(',').map(Number);
    
            if(x1 !== x2 && y1 === y2) {
                // build our range of x points. ie. if 9,4 -> 3,4 then xPoints=3,4,5,6,7,8,9
                let xPoints = Array.apply(null, {length: Math.max(x1,x2) + 1}).map(Number.call, Number).slice(Math.min(x1,x2));
                MarkHorizontal(xPoints, diagram, y1);
            } else if(y1 !== y2 && x1 === x2) {
                // build our range of y points. ie. if 7,0 -> 7,4 then yPoints=0,1,2,3,4
                let yPoints = Array.apply(null, {length: Math.max(y1,y2) + 1}).map(Number.call, Number).slice(Math.min(y1,y2));
                MarkVertical(yPoints, diagram, x1);
            } else { 
                // diagonal line
                if(x1 > x2 && y1 < y2) { // ie. 8,0 -> 0,8
                    // x is decreasing, y is increasing
                    let xPoints = range(x2, x1).sort((a, b) => (a > b ? -1 : 1)); // sort xPoints descending
                    MarkDiagonals(xPoints, diagram, y1, false);
                } else if(x1 > x2 && y1 > y2) { // ie. 6,4 -> 2,0
                    // x is decreasing, y is decreasing
                    let xPoints = range(x2, x1).sort((a, b) => (a > b ? -1 : 1)); // sort xPoints descending
                    MarkDiagonals(xPoints, diagram, y1, true);
                } else if(x1 < x2 && y1 < y2) { // ie. 0,0 -> 8,8
                    // x is increasing, y is increasing
                    let xPoints = range(x1, x2);
                    MarkDiagonals(xPoints, diagram, y1, false);
                } else if(x1 < x2 && y1 > y2) { // ie. 5,5 -> 8,2
                    // x is increasing, y is decreasing
                    let xPoints = range(x1, x2);
                    MarkDiagonals(xPoints, diagram, y1, true);
                } 
            }
        }
    
        // how many points were hit >= 2 times
        return diagram.flat().filter(x => x >= 2).length;
}

/**
 *  Loops through a range of x points with a static y point (aka a horizontal line),
 *  increasing the count for each point in the diagram array.
 */ 
function MarkHorizontal(xPoints: number[], diagram: number[][], y: number) {
    for (let x of xPoints) {
        InitArray(diagram, x, y);
        // increment the count for this point
        diagram[x][y]++;
    }
}

/**
 * Loops through a range of y points with a static x point (aka a vertical line), 
 * increasing the count for each point in the diagram array.
 */
function MarkVertical(yPoints: number[], diagram: number[][], x: number) {
    for (let y of yPoints){
        InitArray(diagram, x, y);
        // increment the count for this point
        diagram[x][y]++;
    }
}

/**
 * Loops through x & y points on a diagonal line, increasing the count for each 
 * point in the diagram array.
 */
function MarkDiagonals(xPoints: number[], diagram: number[][], yStart: number, decreaseY: boolean) {
    let y = yStart;

    for(let x of xPoints) {
        InitArray(diagram, x, y);
        // increment the count for this point
        diagram[x][y]++;
        decreaseY ? y-- : y++;
    }
}

function InitArray(diagram: number[][], x: number, y: number) {
    if(!diagram[x]) { diagram[x] = [] }
    if(!diagram[x][y]) { diagram[x][y] = 0; }
}