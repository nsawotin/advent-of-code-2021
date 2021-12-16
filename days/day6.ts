import fs from 'fs';

export function part1(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split(",")
        .map(Number);

    const numDays = 80;
    let total = [...inputs];

    for (let i = 0; i < numDays; i++) {
        inputs.map((value, index) => {
            if(value !== 0) {
                let newValue = value-1;
                total[index] = newValue;
            } else {
                if (value === 0) {
                    total[index] = 6;
                    total.push(8);
                }
            }
        });

        inputs = [...total];
    }

    return total.length;
}

const fishProducedByDay: Record<number, number> = {};

function FishProduced(initialValue: number, daysLeft: number): number {
    let fishCount = 1;
    let value = initialValue;
    for (let d = daysLeft; d > 0; d--) {
        if (value === 0) {
            let newFishDay = d - 1;
            if (fishProducedByDay[newFishDay]) {
                fishCount += fishProducedByDay[newFishDay];
            } else {
                let numFish = FishProduced(8, newFishDay);
                fishProducedByDay[newFishDay] = numFish;
                fishCount += numFish;
            }
            value = 6;
        } else {
            value--;
        }
    }
    return fishCount;
}

export function part2(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split(",")
        .map(Number);

    const numDays = 256;
    let totalFish = 0;

    for (const initialValue of inputs) {
        let prod = FishProduced(initialValue, numDays);
        totalFish += prod;
    }

    return totalFish;
}