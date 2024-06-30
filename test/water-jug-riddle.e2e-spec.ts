import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { setupApp } from './../src/main';

describe('WaterJugRiddleController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    setupApp(app);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /api/water-jug-riddle/solution', () => {
    it('should return an error in case of empty user input', () => {
      const expectedResponse = {
        message: [
          'jug1Capacity must be a positive number',
          'jug2Capacity must be a positive number',
          'targetVolume must be a positive number',
        ],
        error: 'Bad Request',
        statusCode: 400,
      };

      return request(app.getHttpServer())
        .post('/api/water-jug-riddle/solution')
        .expect(400)
        .expect(expectedResponse);
    });

    it('should return correct answer for a classic challenge (3 and 5 gallon jugs, target 4)', () => {
      const expectedResponse = {
        solution: [
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
        ],
      };

      return request(app.getHttpServer())
        .post('/api/water-jug-riddle/solution')
        .send({ jug1Capacity: 3, jug2Capacity: 5, targetVolume: 4 })
        .expect(200)
        .expect(expectedResponse);
    });
  });
});
