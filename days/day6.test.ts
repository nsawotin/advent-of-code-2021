import { part1, part2 } from "./day6"

const inputPath = "./Inputs/day6Test.txt"

it("calculates part 1 correctly", () => {
    const answer = part1(inputPath);
    expect (answer).toBe(5934);
})

// TODO
it.skip("calculates part 2 correctly", () => {
    const answer = part2(inputPath);
    expect (answer).toBe(26984457539);
})