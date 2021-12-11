import { part1 as day1part1, part2 as day1part2 } from "./days/day1"
import { part1 as day2part1, part2 as day2part2 } from "./days/day2"
import { part1 as day3part1, part2 as day3part2 } from "./days/day3"
import { part1 as day4part1, part2 as day4part2 } from "./days/day4"
import { part1 as day5part1, part2 as day5part2 } from "./days/day5"
import { part1 as day6part1, part2 as day6part2 } from "./days/day6"
import { part1 as day7part1, part2 as day7part2 } from "./days/day7"
import { part1 as day8part1, part2 as day8part2 } from "./days/day8"
import { part1 as day9part1, part2 as day9part2 } from "./days/day9"
import { part1 as day10part1, part2 as day10part2 } from "./days/day10"
import { part1 as day11part1, part2 as day11part2 } from "./days/day11"

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
    const day5part1Answer = day5part1(`${inputPath}day5${testMode ? "Test" : ""}.txt`);
    const day5part2Answer = day5part2(`${inputPath}day5${testMode ? "Test" : ""}.txt`);
    const day6part1Answer = day6part1(`${inputPath}day6${testMode ? "Test" : ""}.txt`);
    const day6part2Answer = day6part2(`${inputPath}day6${testMode ? "Test" : ""}.txt`);
    const day7part1Answer = day7part1(`${inputPath}day7${testMode ? "Test" : ""}.txt`);
    const day7part2Answer = day7part2(`${inputPath}day7${testMode ? "Test" : ""}.txt`);
    const day8part1Answer = day8part1(`${inputPath}day8${testMode ? "Test" : ""}.txt`);
    const day8part2Answer = day8part2(`${inputPath}day8${testMode ? "Test" : ""}.txt`);
    const day9part1Answer = day9part1(`${inputPath}day9${testMode ? "Test" : ""}.txt`);
    const day9part2Answer = day9part2(`${inputPath}day9${testMode ? "Test" : ""}.txt`);
    const day10part1Answer = day10part1(`${inputPath}day10${testMode ? "Test" : ""}.txt`);
    const day10part2Answer = day10part2(`${inputPath}day10${testMode ? "Test" : ""}.txt`);
    const day11part1Answer = day11part1(`${inputPath}day11${testMode ? "Test" : ""}.txt`);
    const day11part2Answer = day11part2(`${inputPath}day11${testMode ? "Test" : ""}.txt`);


    console.log(`Testmode: ${testMode}`);
    console.log(`Day 1 - Part 1 Answer: ${day1part1Answer}`);
    console.log(`Day 1 - Part 2 Answer: ${day1part2Answer}`);
    console.log(`Day 2 - Part 1 Answer: ${day2part1Answer}`);
    console.log(`Day 2 - Part 2 Answer: ${day2part2Answer}`);
    console.log(`Day 3 - Part 1 Answer: ${day3part1Answer}`);
    console.log(`Day 3 - Part 2 Answer: ${day3part2Answer}`);
    console.log(`Day 4 - Part 1 Answer: ${day4part1Answer}`);
    console.log(`Day 4 - Part 2 Answer: ${day4part2Answer}`);
    console.log(`Day 5 - Part 1 Answer: ${day5part1Answer}`);
    console.log(`Day 5 - Part 2 Answer: ${day5part2Answer}`);
    console.log(`Day 6 - Part 1 Answer: ${day6part1Answer}`);
    console.log(`Day 6 - Part 2 Answer: ${day6part2Answer}`);
    console.log(`Day 7 - Part 1 Answer: ${day7part1Answer}`);
    console.log(`Day 7 - Part 2 Answer: ${day7part2Answer}`);
    console.log(`Day 8 - Part 1 Answer: ${day8part1Answer}`);
    console.log(`Day 8 - Part 2 Answer: ${day8part2Answer}`);
    console.log(`Day 9 - Part 1 Answer: ${day9part1Answer}`);
    console.log(`Day 9 - Part 2 Answer: ${day9part2Answer}`);
    console.log(`Day 10 - Part 1 Answer: ${day10part1Answer}`);
    console.log(`Day 10 - Part 2 Answer: ${day10part2Answer}`);
    console.log(`Day 11 - Part 1 Answer: ${day11part1Answer}`);
    console.log(`Day 11 - Part 2 Answer: ${day11part2Answer}`);
}

runAlldays();