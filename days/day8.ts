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
    const entries = fs.readFileSync(path).toString().split('\n');
    let grandTotal = 0;

     /**
      * Array of sets, each set represents a segment's possible values.
      * We fill each set with possible values, and narrow them down as
      * we loop through.
      *
      * ie:
      * Start          Possible Values             Complete
      * -----          ---------------             --------
      *   []                 0[d]                    0[d]
      * []  []         1[ef]      2[ab]         1[e]      2[a]
      *   []    ====>        3[ef]       ====>       3[f]
      * []  []         4[cg]      5[ab]         4[g]      5[b]
      *   []                 6[cg]                   6[c]
      **/
    let sevenSegmentDisplay = new Array(7).fill(null).map(()=> (new Set())); 

    for (let entry of entries) {
        let outputLine = entry.split(" | ")[1];
        let line = entry.split(" ").filter(e => !e.includes("|")).sort((a, b) => (a.length > b.length ? 1 : -1))
        // letters we've already processed
        let markedLetters: Set<string> = new Set();

        // build our segment map
        for(let word of line) {
            let newLetters = word.split("");

            if (word.length === 2) { // digit = 1
                // fill our one segments
                if(sevenSegmentDisplay[2].size === 0) {
                    newLetters.forEach(item => sevenSegmentDisplay[2].add(item));
                    newLetters.forEach(item => sevenSegmentDisplay[5].add(item));
                }
            } else if (word.length === 3) { // digit = 7
                // one segments should already be filled; fill our 7 segment
                let seg2and5 = Array.from(sevenSegmentDisplay[2]); // 1 segments
                newLetters.forEach(item => { 
                    if(!seg2and5.includes(item)) { 
                        (sevenSegmentDisplay[0].add(item));
                    }
                });
            } else if (word.length === 4) { // digit == 4
                // one/seven segments should already be filled; fill our 4 segments
                newLetters.forEach(item => { // ie. eafb
                    if(!markedLetters.has(item)) { // abd
                        sevenSegmentDisplay[1].add(item);
                        sevenSegmentDisplay[3].add(item);
                    }
                });
            } else if (word.length === 5) { // digit == 2, 3, or 5
                newLetters.forEach(item => { 
                    if(!markedLetters.has(item)) { // abdef (1st time); abdefc (2nd & 3rd time)
                            sevenSegmentDisplay[4].add(item); // c, g
                            sevenSegmentDisplay[6].add(item); // c, g
                    }
                });
            } else if (word.length === 6) { // digit == 0, 6, or 9
                // to be a 6 or 9, all letters in sevenSegmentDisplay[3] would have to be in word
                // else its a 0
                let seg3: string[] = Array.from(sevenSegmentDisplay[3].values()).map(String);
                let is6or9 = seg3.every((elem: string) => newLetters.includes(elem));

                if(!is6or9) { // is 0
                    // ie. cagedb
                    let letter = seg3.filter(l => !newLetters.includes(l));
                    sevenSegmentDisplay[3] = new Set(letter); // instead delete other?

                    // if any other set contains above's last letter, remove
                    for (let i = 0; i < sevenSegmentDisplay.length; i++) {
                        if(sevenSegmentDisplay[i].size > 1) {
                            sevenSegmentDisplay[i].delete(letter[0]);
                        }
                    }
                } else { // is 6 or 9
                    // if all letters in seg 2 are not in newLetters it's a 6, else it's a 9
                    let seg2: string[] = Array.from(sevenSegmentDisplay[2].values()).map(String);
                    let seg4: string[] = Array.from(sevenSegmentDisplay[4].values()).map(String);
                    let is6 = !seg2.every((elem: string) => newLetters.includes(elem));
                    
                    if(is6)
                    {
                        // remove from seg2 any letter not in newLetters
                        let letter = seg2.filter(l => !newLetters.includes(l));
                        sevenSegmentDisplay[2] = new Set(letter);

                        for (let i = 0; i < sevenSegmentDisplay.length; i++) {
                            if(sevenSegmentDisplay[i].size > 1) {
                                sevenSegmentDisplay[i].delete(letter[0]);
                            }
                        }
                    } else { // it's 9
                        // remove from seg2 any letter not in newLetters
                        let letter = seg4.filter(l => !newLetters.includes(l));
                        sevenSegmentDisplay[4] = new Set(letter);

                        for (let i = 0; i < sevenSegmentDisplay.length; i++) {
                            if(sevenSegmentDisplay[i].size > 1) {
                                sevenSegmentDisplay[i].delete(letter[0]);
                            }
                        }
                    }
                }
            }

            word.split("").forEach(item => markedLetters.add(item));
            if(sevenSegmentDisplay.every(s => s.size === 1)) {
                break;
            }
        }

        // use our segment map to determine each output's value and add them up
        let finalOutputNum = "";
        for (let word of outputLine.split(" ")) {
            let newLetters = word.split("");
            let segments: number[] = [];
            let num = "";

            for (let letter of newLetters) {
                segments.push(sevenSegmentDisplay.findIndex(s => s.has(letter)));
            }

            let pattern = (segments.sort((a, b) => (a > b ? 1 : -1)).toString());
            switch(pattern) { 
                case  "2,5":
                    num = "1";
                    break;
                case  "0,2,3,4,6":
                    num = "2";
                    break;
                case  "0,2,3,5,6":
                    num = "3";
                    break;
                case  "1,2,3,5":
                    num = "4";
                    break;
                case  "0,1,3,5,6":
                    num = "5";
                    break;
                case  "0,1,3,4,5,6":
                    num = "6";
                    break;
                case  "0,2,5":
                    num = "7";
                    break;
                case  "0,1,2,3,4,5,6":
                    num = "8";
                    break;
                case  "0,1,2,3,5,6":
                    num = "9";
                    break;
                case  "0,1,2,4,5,6":
                    num = "0";
                    break;
            }
            finalOutputNum = finalOutputNum.concat(num);
        }

        grandTotal += parseInt(finalOutputNum);
        sevenSegmentDisplay = new Array(7).fill(null).map(()=> (new Set()));
    }

    return grandTotal;
}