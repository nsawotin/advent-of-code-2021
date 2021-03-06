import { part1, part2 } from "./day9"

const inputPath = "./Inputs/day9Test.txt"

it("calculates part 1 correctly", () => {
    const answer = part1(inputPath);
    expect (answer).toBe(15);
})

it("calculates part 2 correctly", () => {
    const answer = part2(inputPath);
    expect (answer).toBe(1134);
})