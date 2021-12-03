import { part1, part2 } from "./day2"

const inputPath = "./Inputs/day2Test.txt"

it("calculates part 1 correctly", () => {
    const answer = part1(inputPath);
    expect (answer).toBe(150);
})

it("calculates part 2 correctly", () => {
    const answer = part2(inputPath);
    expect (answer).toBe(900);
})