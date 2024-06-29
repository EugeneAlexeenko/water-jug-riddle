import { Injectable } from '@nestjs/common';

@Injectable()
export class WaterJugRiddleService {
  getSolution(): any {
    return 'dummy solution';
  }
}
