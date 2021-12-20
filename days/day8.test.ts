import { part1, part2 } from "./day8"

const inputPath1 = "./Inputs/day8Test1.txt"
const inputPath = "./Inputs/day8Test.txt"

it("calculates part 1 correctly", () => {
    const answer = part1(inputPath);
    expect (answer).toBe(26);
})

it("calculates part 2 correctly", () => {
    let answer = part2(inputPath1);
    expect (answer).toBe(5353);

    answer = part2(inputPath);
    expect (answer).toBe(61229);
})