import { Body, Controller, Post } from '@nestjs/common';
import { WaterJugRiddleService } from './water-jug-riddle.service';
import { SolutionRequestDto } from './dto/solution-request.dto';
import { SolutionResponseDto } from './dto/solution-response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('water-jug-riddle')
@Controller('water-jug-riddle')
export class WaterJugRiddleController {
  constructor(private readonly waterJugRiddleService: WaterJugRiddleService) {}

  @Post('solution')
  getSolution(@Body() dto: SolutionRequestDto): SolutionResponseDto {
    const solution = this.waterJugRiddleService.getSolution();

    return { solution };
  }
}
