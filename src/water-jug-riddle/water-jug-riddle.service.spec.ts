import { Test, TestingModule } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { WaterJugRiddleService } from './water-jug-riddle.service';
import { Solution } from './types';
import { Cache } from 'cache-manager';

describe('WaterJugRiddleService', () => {
  let waterJugRiddleService: WaterJugRiddleService;
  let cacheManager: Cache;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        WaterJugRiddleService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: jest.fn(),
            set: jest.fn(),
          },
        },
      ],
    }).compile();

    waterJugRiddleService = app.get<WaterJugRiddleService>(
      WaterJugRiddleService,
    );
    cacheManager = app.get<Cache>(CACHE_MANAGER);
  });

  beforeEach(() => {
    // disable caching in tests
    jest.spyOn(cacheManager, 'get').mockResolvedValue(null);
  });

  it('should be defined', () => {
    expect(waterJugRiddleService).toBeDefined();
  });

  describe('getSolution', () => {
    it('should return an error if target volume cannot fit into the bigger jug', async () => {
      const expectedResult: Solution =
        'Solution does not exist. Target volume: 10 is bigger than the bigger jug capacity: 5';
      const solution = await waterJugRiddleService.getSolution(1, 5, 10);
      expect(solution).toEqual(expectedResult);
    });

    it('should return an error if solution is not possible', async () => {
      const expectedResult: Solution =
        'Solution does not exist. Target volume: 2 is not a multiple of GCD(3, 6)';
      const solution = await waterJugRiddleService.getSolution(3, 6, 2);
      expect(solution).toEqual(expectedResult);
    });

    it('should return correct solution for classic problem with 3 and 5 gallon jugs', async () => {
      const solution = await waterJugRiddleService.getSolution(3, 5, 4);

      expect(solution).toEqual([
        { step: 1, jug1Volume: 0, jug2Volume: 5, action: 'Fill Jug2' },
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
          status: 'Solved',
        },
      ]);
    });
  });

  it.todo('add test for caching');
});
