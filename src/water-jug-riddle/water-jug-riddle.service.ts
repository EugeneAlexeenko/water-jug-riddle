import { Injectable } from '@nestjs/common';
import { Solution, Step } from './types';

@Injectable()
export class WaterJugRiddleService {
  getSolution(
    jug1Capacity: number,
    jug2Capacity: number,
    targetVolume: number,
  ): Solution {
    const biggerJugCapacity = Math.max(jug1Capacity, jug2Capacity);

    if (jug1Capacity < targetVolume && jug2Capacity < targetVolume) {
      return `Solution does not exist. Target volume: ${targetVolume} is bigger than the bigger jug capacity: ${biggerJugCapacity}`;
    }

    if (targetVolume % this.gcd(jug1Capacity, jug2Capacity) != 0) {
      return `Solution does not exist. Target volume: ${targetVolume} is not a multiple of GCD(${jug1Capacity}, ${jug2Capacity})`;
    }

    const solutions = [
      this.pour(jug1Capacity, jug2Capacity, targetVolume, 'Jug1', 'Jug2'),
      this.pour(jug2Capacity, jug1Capacity, targetVolume, 'Jug2', 'Jug1'),
    ];

    const bestSolution = solutions.reduce((shortest, current) =>
      current.length < shortest.length ? current : shortest,
    );

    console.log(bestSolution);
    return bestSolution;
  }

  private pour(
    fromJugCapacity: number,
    toJugCap: number,
    targetVolume: number,
    fromCapName: string,
    toCapName: string,
  ): any {
    // Initialize current amount of water in source and destination jugs
    let from = fromJugCapacity;
    let to = 0;

    // Initialize count of steps required
    let step = 1; // Needed to fill "from" Jug
    let steps = [
      {
        step: 1,
        [`${fromCapName.toLowerCase()}Volume`]: from,
        [`${toCapName.toLowerCase()}Volume`]: to,
        action: `Fill ${fromCapName}`,
      },
    ];

    // Break the loop when either of the two jugs has d litre water
    while (from != targetVolume && to != targetVolume) {
      // Find the maximum amount that can be poured
      let temp = Math.min(from, toJugCap - to);

      // Pour "temp" liters from "from" to "to"
      to += temp;
      from -= temp;

      // Increment count of steps
      step++;
      steps.push({
        step,
        [`${fromCapName.toLowerCase()}Volume`]: from,
        [`${toCapName.toLowerCase()}Volume`]: to,
        action: `Transfer from ${fromCapName} to ${toCapName}`,
      });

      if (from == targetVolume || to == targetVolume) break;

      // If first jug becomes empty, fill it
      if (from == 0) {
        from = fromJugCapacity;
        step++;
        steps.push({
          step,
          [`${fromCapName.toLowerCase()}Volume`]: from,
          [`${toCapName.toLowerCase()}Volume`]: to,
          action: `Fill ${fromCapName}`,
        });
      }

      // If second jug becomes full, empty it
      if (to == toJugCap) {
        to = 0;
        step++;
        steps.push({
          step,
          [`${fromCapName.toLowerCase()}Volume`]: from,
          [`${toCapName.toLowerCase()}Volume`]: to,
          action: `Empty ${toCapName}`,
        });
      }
    }

    steps[steps.length - 1].status = 'Solved';

    return steps;
  }

  /**
   * Utility function to return GCD (greatest common divison) of 'a' and 'b'.
   **/
  private gcd(a: number, b: number): number {
    if (b == 0) return a;

    return this.gcd(b, a % b);
  }
}
