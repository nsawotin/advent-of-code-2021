import fs from 'fs';

interface FuelUsage {
    position: number,
    fuel: number
};

export function part1(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split(",")
        .map(Number);

        let min = Math.min(...inputs);
        let max = Math.max(...inputs);
        let totalFuel = 0;
        
        // create an array filled from min to max
        let positionsToCheck = Array.apply(null, {length: max + 1}).map(Number.call, Number).slice(min);

        let fuelUsed: FuelUsage[] = [];
        for (let i = 0; i < positionsToCheck.length; i++) {
            for (let j=0; j< inputs.length; j++) {
                // each change of 1 step in horizontal position costs 1 fuel, so total fuel used is the 
                // just the distance (num steps) between the two horizontal positions
                totalFuel += Math.abs(inputs[j]-positionsToCheck[i]);
            }

            let distance: FuelUsage = { position: positionsToCheck[i], fuel: totalFuel };
            fuelUsed.push(distance)
            totalFuel = 0;
        }

        // find the lowest fuel usage
        let num = fuelUsed.reduce((prev, curr) => prev.fuel < curr.fuel ? prev : curr);
        
        return num.fuel;
}

export function part2(path: string): number {
    let inputs = fs
        .readFileSync(path)
        .toString().split(",")
        .map(Number);

        let min = Math.min(...inputs);
        let max = Math.max(...inputs);
        let totalFuel = 0;
        let totalDistance = 0;

        // create an array filled from min to max
        let positionsToCheck = Array.apply(null, {length: max + 1}).map(Number.call, Number).slice(min);

        let fuelUsed: FuelUsage[] = [];
        for (let i = 0; i < positionsToCheck.length; i++) {
            for (let j=0; j< inputs.length; j++) {
                totalDistance += Math.abs(inputs[j]-positionsToCheck[i]);
                // this time, each change of 1 step in horizontal position costs 1 more unit of fuel than the last
                for (let k=0; k<totalDistance; k++) {
                    totalFuel += k+1;
                }
                totalDistance = 0;
            }

            let distance: FuelUsage = { position: positionsToCheck[i], fuel: totalFuel };
            fuelUsed.push(distance)
            totalFuel = 0;
        }

        // find the lowest fuel usage
        let num = fuelUsed.reduce((prev, curr) => prev.fuel < curr.fuel ? prev : curr);
        
        return num.fuel;
}