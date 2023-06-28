import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  @ApiProperty({ description: '咖啡免称' })
  readonly name: string;

  @IsString()
  @ApiProperty({ description: '咖啡品牌' })
  readonly brand: string;

  @IsString()
  @ApiProperty({ description: '咖啡特色' })
  readonly flavors: string[];
}
