import { part1, part2 } from "./day7"

const inputPath = "./Inputs/day7Test.txt"

it("calculates part 1 correctly", () => {
    const answer = part1(inputPath);
    expect (answer).toBe(37);
})

it("calculates part 2 correctly", () => {
    const answer = part2(inputPath);
    expect (answer).toBe(168);
})