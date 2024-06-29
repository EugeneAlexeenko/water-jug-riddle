import { ApiProperty } from '@nestjs/swagger';

export class SolutionRequestDto {
  @ApiProperty({
    example: 3,
    description: 'Capacity of jug 1',
  })
  jug1Capacity: number;

  @ApiProperty({
    example: 5,
    description: 'Capacity of jug 2',
  })
  jug2Capacity: number;

  @ApiProperty({
    example: 4,
    description: 'Target volume of water',
  })
  targetVolume: number;
}
