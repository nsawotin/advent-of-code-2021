import { part1, part2 } from "./day1"

const inputPath = "./Inputs/day1Test.txt"

it("calculates part 1 correctly", () => {
    const answer = part1(inputPath);
    expect (answer).toBe(7);
})

it("calculates part 2 correctly", () => {
    const answer = part2(inputPath);
    expect (answer).toBe(5);
})