import { part1 as day1part1, part2 as day1part2 } from "./days/day1"
import { part1 as day2part1, part2 as day2part2 } from "./days/day2"
import { part1 as day3part1, part2 as day3part2 } from "./days/day3"
import { part1 as day4part1, part2 as day4part2 } from "./days/day4"

const inputPath = "./Inputs/";
const testMode = false;

export function runAlldays() {
    const day1part1Answer = day1part1(`${inputPath}day1${testMode ? "Test" : ""}.txt`);
    const day1part2Answer = day1part2(`${inputPath}day1${testMode ? "Test" : ""}.txt`);
    const day2part1Answer = day2part1(`${inputPath}day2${testMode ? "Test" : ""}.txt`);
    const day2part2Answer = day2part2(`${inputPath}day2${testMode ? "Test" : ""}.txt`);
    const day3part1Answer = day3part1(`${inputPath}day3${testMode ? "Test" : ""}.txt`);
    const day3part2Answer = day3part2(`${inputPath}day3${testMode ? "Test" : ""}.txt`);
    const day4part1Answer = day4part1(`${inputPath}day4${testMode ? "Test" : ""}.txt`);
    const day4part2Answer = day4part2(`${inputPath}day4${testMode ? "Test" : ""}.txt`);

    console.log(`Testmode: ${testMode}`);
    console.log(`Part 1 Answer: ${day1part1Answer}`);
    console.log(`Part 2 Answer: ${day1part2Answer}`);
    console.log(`Part 1 Answer: ${day2part1Answer}`);
    console.log(`Part 2 Answer: ${day2part2Answer}`);
    console.log(`Part 1 Answer: ${day3part1Answer}`);
    console.log(`Part 2 Answer: ${day3part2Answer}`);
    console.log(`Part 1 Answer: ${day4part1Answer}`);
    console.log(`Part 2 Answer: ${day4part2Answer}`);
}

runAlldays();