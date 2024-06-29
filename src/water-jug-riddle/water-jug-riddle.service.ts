import { Injectable } from '@nestjs/common';

@Injectable()
export class WaterJugRiddleService {
  getSolution(): Solution {
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
