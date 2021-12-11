import { part1, part2 } from "./day10"

const inputPath = "./Inputs/day10Test.txt"

it("calculates part 1 correctly", () => {
    const answer = part1(inputPath);
    expect (answer).toBe(26397);
})

it("calculates part 2 correctly", () => {
    const answer = part2(inputPath);
    expect (answer).toBe(288957);
})