import { ApiProperty } from '@nestjs/swagger';
import { IsPositive } from 'class-validator';

export class SolutionRequestDto {
  @ApiProperty({
    example: 3,
    description: 'Capacity of jug 1',
  })
  @IsPositive()
  jug1Capacity: number;

  @ApiProperty({
    example: 5,
    description: 'Capacity of jug 2',
  })
  @IsPositive()
  jug2Capacity: number;

  @ApiProperty({
    example: 4,
    description: 'Target volume of water',
  })
  @IsPositive()
  targetVolume: number;
}
