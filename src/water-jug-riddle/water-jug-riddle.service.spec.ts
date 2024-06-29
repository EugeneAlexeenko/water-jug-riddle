import { Test, TestingModule } from '@nestjs/testing';
import { WaterJugRiddleService } from './water-jug-riddle.service';

describe('WaterJugRiddleService', () => {
  let waterJugRiddleService: WaterJugRiddleService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [WaterJugRiddleService],
    }).compile();

    waterJugRiddleService = app.get<WaterJugRiddleService>(
      WaterJugRiddleService,
    );
  });

  it('should be defined', () => {
    expect(waterJugRiddleService).toBeDefined();
  });

  describe('getSolution', () => {
    it.todo('should return an error if constraints are not met');

    it('should return correct solution for classic problem with 3 and 5 liters jugs', () => {
      const solution = waterJugRiddleService.getSolution(3, 5, 4);

      expect(solution).toEqual([
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
      ]);
    });
  });
});