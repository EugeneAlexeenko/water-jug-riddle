import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { WaterJugRiddleService } from './water-jug-riddle.service';
import { WaterJugRiddleController } from './water-jug-riddle.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [WaterJugRiddleController],
  providers: [WaterJugRiddleService],
})
export class WaterJugRiddleModule {}
