export class PlantDto {
  name: string;
  owned: boolean;
  location: string;
}

export class CreatePlantDto extends PlantDto {}

export class UpdatePlantDto implements Partial<PlantDto> {}

export class ListAllEntities {
  limit?: number;
}
