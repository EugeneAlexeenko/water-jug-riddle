import { ApiProperty } from '@nestjs/swagger';

export class SolutionRequestDto {
  @ApiProperty({
    example: 3,
    description: 'Volume of jug 1',
  })
  jug1Volume: number;

  @ApiProperty({
    example: 5,
    description: 'Volume of jug 2',
  })
  jug2Volume: number;

  @ApiProperty({
    example: 4,
    description: 'Target volume of water',
  })
  targetVolume: number;
}
