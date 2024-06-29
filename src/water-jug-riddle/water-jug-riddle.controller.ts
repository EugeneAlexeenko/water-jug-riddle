import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WaterJugRiddleService } from './water-jug-riddle.service';
import { SolutionRequestDto } from './dto/solution-request.dto';
import { SolutionResponseDto } from './dto/solution-response.dto';

@ApiTags('water-jug-riddle')
@Controller('water-jug-riddle')
export class WaterJugRiddleController {
  constructor(private readonly waterJugRiddleService: WaterJugRiddleService) {}

  @ApiOkResponse({
    type: SolutionResponseDto,
    description: 'Solution of water jug riddle',
  })
  @ApiOperation({
    summary: 'Get solution of water jug riddle',
    description:
      'This endpoint computes the steps required to measure exactly Z gallons using two jugs of capacities X and Y gallons',
  })
  @Post('solution')
  @HttpCode(HttpStatus.OK)
  getSolution(@Body() dto: SolutionRequestDto): SolutionResponseDto {
    const solution = this.waterJugRiddleService.getSolution();

    return { solution };
  }
}
