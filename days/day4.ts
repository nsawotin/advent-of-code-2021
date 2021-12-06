import fs from 'fs';

interface BingoCard {
    lines: number[][]; // all horizontal & vertical lines
}
let bingoCards: BingoCard[];
let drawnSoFar: number[];

export function part1(path: string): number {
    const inputs = fs
        .readFileSync(path)
        .toString().split("\n")
        .map(line => line
            .replace(/\r$/, '')
        );

        bingoCards = [];
        drawnSoFar = [];
        const numbersDrawn = inputs[0].split(",").filter(n => n).map(Number);

        // read input file to build our bingoCards
        ReadInputs(inputs);

        // calculate winner
        let winningCards = FindWinningCards(numbersDrawn, bingoCards, true);
        let winningCard = winningCards[0];

        // add up all unmarked numbers
        let sum = FindSumOfUnmarked(winningCard);

        // answer will be sum * the last drawn number
        return sum * drawnSoFar.pop();
}

export function part2(path: string): number {
    const inputs = fs
        .readFileSync(path)
        .toString().split("\n")
        .map(line => line
            .replace(/\r$/, '')
        );

        bingoCards = [];
        drawnSoFar = [];
        const numbersDrawn = inputs[0].split(",").filter(n => n).map(Number);

        // read input file to build our bingoCards
        ReadInputs(inputs);

        // calculate winner
        let winningCards = FindWinningCards(numbersDrawn, bingoCards, false);
        let winningCard = winningCards[winningCards.length-1];
        
        // add up all unmarked numbers
        let sum = FindSumOfUnmarked(winningCard);

        // answer will be sum * the last drawn number
        return sum * drawnSoFar.pop();
}

function ReadInputs(inputs: string[]) {
    let bc: BingoCard;

    for (let i = 1; i < inputs.length; i++) {
        if(inputs[i] == '') {
            bc = <BingoCard> {
                lines: []
            }
        } else {
            // add row lines
            // filter empty and convert to number
            let row = inputs[i].split(" ").filter(n => n).map(Number);
            bc.lines?.push(row);
        }

        if(bc.lines.length == 5) {
            // add col lines
            let i=0;
            let j=0;
            let col = [];
            while(i < 5) {
                while (j<5)
                {
                    col.push(bc.lines[j][i]);
                    j++;
                }
                bc.lines.push(col);
                col = [];
                j=0;
                i++;
            }
        }

         // once we've added all 10 row & col lines, add the bingo card
         if(bc.lines?.length == 10) {
            bingoCards.push(bc);
        }
    }
}

function FindWinningCards(numbersDrawn: number[], bingoCards: BingoCard[], firstOnly: boolean) : BingoCard[] {
    drawnSoFar = numbersDrawn.slice(0, 4); // skip the first 4 & start checking at 5th number (since impossible to BINGO on 4 numbers only)
    let leftToDraw = numbersDrawn.slice(4);
    let winners: BingoCard[] = [];

    for (let drawnNumber of leftToDraw) {
        drawnSoFar.push(drawnNumber);

        for (let i = 0; i < bingoCards.length; i++) {
            let lines = bingoCards[i].lines;

            for (let line of lines) {
                let isLineWinner = line.every(elem => drawnSoFar.includes(elem));

                if(isLineWinner == true) {
                    if(firstOnly) {
                        winners.push(bingoCards[i]);
                        return winners;
                    } else {
                        winners.push(bingoCards[i]);
                        bingoCards.splice(i,1);
                        if(bingoCards.length == 0) {
                            return winners;
                        }
                        break;
                    }
                }
            }
        }
    }

    return winners;
}

function FindSumOfUnmarked(winningCard: BingoCard): number {
    // add up all unmarked numbers
    let sum = 0;
    let lines = winningCard.lines;
    for(let x = 0; x < 5; x++) {
        for(let y = 0; y < 5; y++) {
            let val = lines[x][y];
            sum += !drawnSoFar.includes(val) ? val : 0;
        }
    }

    return sum;
}