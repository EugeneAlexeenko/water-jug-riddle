import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WaterJugRiddleService } from './water-jug-riddle.service';
import { SolutionRequestDto } from './dto/solution-request.dto';
import { SolutionResponseDto } from './dto/solution-response.dto';

@ApiTags('water-jug-riddle')
@Controller('water-jug-riddle')
export class WaterJugRiddleController {
  constructor(private readonly waterJugRiddleService: WaterJugRiddleService) {}

  @ApiOkResponse({
    type: SolutionResponseDto,
    description: 'Get solution of water jug riddle',
  })
  @Post('solution')
  getSolution(@Body() dto: SolutionRequestDto): SolutionResponseDto {
    const solution = this.waterJugRiddleService.getSolution();

    return { solution };
  }
}
