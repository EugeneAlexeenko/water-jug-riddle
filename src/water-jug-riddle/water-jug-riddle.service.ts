import { Injectable } from '@nestjs/common';
import { Solution, Step } from './types';

@Injectable()
export class WaterJugRiddleService {
  getSolution(
    jug1Capacity: number,
    jug2Capacity: number,
    targetCapacity: number,
  ): Solution {
    console.log(jug1Capacity, jug2Capacity, targetCapacity);
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
