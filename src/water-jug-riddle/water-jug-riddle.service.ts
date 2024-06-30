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

    return this.getDummySolution();
  }

  private getDummySolution(): Step[] {
    return [
      { step: 1, jug1Volume: 5, jug2Volume: 0, action: 'Fill Jug1' },
      {
        step: 2,
        jug1Volume: 3,
        jug2Volume: 2,
        action: 'Transfer from Jug2 to Jug1',
      },
      { step: 3, jug1Volume: 0, jug2Volume: 2, action: 'Empty Jug1' },
      {
        step: 4,
        jug1Volume: 2,
        jug2Volume: 0,
        action: 'Transfer from Jug2 to Jug1',
      },
      { step: 5, jug1Volume: 2, jug2Volume: 5, action: 'Fill Jug2' },
      {
        step: 6,
        jug1Volume: 3,
        jug2Volume: 4,
        action: 'Transfer from Jug2 to Jug1',
        status: 'solved',
      },
    ];
  }
}
