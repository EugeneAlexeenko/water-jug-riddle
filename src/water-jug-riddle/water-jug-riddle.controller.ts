import { Controller, Post } from '@nestjs/common';
import { WaterJugRiddleService } from './water-jug-riddle.service';

@Controller('water-jug-riddle')
export class WaterJugRiddleController {
  constructor(private readonly waterJugRiddleService: WaterJugRiddleService) {}

  @Post('solution')
  getSolution(): any {
    return this.waterJugRiddleService.getSolution();
  }
}
