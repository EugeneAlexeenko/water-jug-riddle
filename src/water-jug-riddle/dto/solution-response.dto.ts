import { ApiProperty } from '@nestjs/swagger';
import { Solution } from '../types';

export class SolutionResponseDto {
  @ApiProperty({
    description: 'Solution of water jug riddle',
  })
  solution: Solution;
}
