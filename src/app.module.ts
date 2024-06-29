import { Module } from '@nestjs/common';
import { WaterJugRiddleModule } from './water-jug-riddle/water-jug-riddle.module';

@Module({
  imports: [WaterJugRiddleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
