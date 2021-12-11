import fs from 'fs';

export function part1(path: string): number {
    const array = fs.readFileSync(path).toString().split('\n');
    let points = 0;

    // process the "corrupt" lines
    for (let line of array) {
        let openChars: string[] = [];
        points += ProcessLine(line, openChars, false);
    }
    
    return points;
}

export function part2(path: string): number {
    const array = fs.readFileSync(path).toString().split('\n');
    let pointsArr: number[] = [];
    
    // process the "incomplete" lines
    for (let line of array) {
        let openChars: string[] = [];
        pointsArr.push(ProcessLine(line, openChars, true));
    }
    
    pointsArr = pointsArr.filter(a => a > 0).sort((a, b) => a - b);
    return pointsArr[Math.floor(pointsArr.length / 2)];
}

function ProcessLine(line: string, openChars: string[], part2: boolean): number {
    let points = 0;
    let incompletePoints = 0;
    let lineCorrupt = false;

    for (var i = 0; i < line.length; i++) {
        let char = line.charAt(i);

        if (['(', '[', '{', '<'].indexOf(char) >= 0) {
            // open char
            openChars.push(char);
        } else if ([')', ']', '}', '>'].indexOf(char) >= 0) {
            // closing char
            switch(char) { 
                case ')': {
                    if(openChars[openChars.length-1] !== '(') {
                        points +=3;
                        lineCorrupt = true;
                    }
                    openChars.pop();
                    break;
                }
                case ']':
                    if(openChars[openChars.length-1] !== '[') {
                        points +=57;
                        lineCorrupt = true;
                    }
                    openChars.pop();
                    break;
                case '}':
                    if(openChars[openChars.length-1] !== '{') {
                        points +=1197;
                        lineCorrupt = true;
                    }
                    openChars.pop();
                    break;
                case '>':
                    if(openChars[openChars.length-1] !== '<') {
                        points +=25137;
                        lineCorrupt = true;
                    }
                    openChars.pop();
                    break;
            }
        }
    }

    if(part2 && !lineCorrupt) {
        const missingChars = openChars.reverse();
        for (let openChar of missingChars) { 
            switch(openChar) { 
                case '(':
                    incompletePoints = incompletePoints*5 + 1;
                    break;
                case '[':
                    incompletePoints = incompletePoints*5 + 2;
                    break;
                case '{':
                    incompletePoints = incompletePoints*5 + 3;
                    break;
                case '<':
                    incompletePoints = incompletePoints*5 + 4;
                    break;
            }
        }
        return incompletePoints;
    } else if (part2 && lineCorrupt) {
        return 0;
    }

    return points;
}