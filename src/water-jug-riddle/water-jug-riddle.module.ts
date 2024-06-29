import { Module } from '@nestjs/common';
import { WaterJugRiddleService } from './water-jug-riddle.service';
import { WaterJugRiddleController } from './water-jug-riddle.controller';

@Module({
  imports: [],
  controllers: [WaterJugRiddleController],
  providers: [WaterJugRiddleService],
})
export class WaterJugRiddleModule {}
