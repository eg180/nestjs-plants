import { IsString, IsBoolean } from 'class-validator';
export class PlantDto {
  @IsString()
  name: string;

  @IsBoolean()
  owned: boolean;

  @IsString()
  location: string;
}

export class CreatePlantDto extends PlantDto {}

export class UpdatePlantDto implements Partial<PlantDto> {}

export class ListAllEntities {
  limit?: number;
}
