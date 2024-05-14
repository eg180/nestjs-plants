import { Body, Controller, Get, Param, Post, Query, Put } from '@nestjs/common';
import {
  CreatePlantDto,
  ListAllEntities,
  PlantDto,
  UpdatePlantDto,
} from './dto';
import { PlantsService } from './plants.service';
import { Plant } from './interfaces';

// Note:  Controllers should handle HTTP requests and delegate more complex tasks to providers. Providers are plain JavaScript classes that are declared as providers in a module.

@Controller('plants')
export class PlantsController {
  constructor(private plantService: PlantsService) {}
  @Post()
  async create(@Body() createPlantDto: CreatePlantDto) {
    this.plantService.create(createPlantDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<Plant[]> {
    return this.plantService.findAll(query.limit);
  }

  @Get(':id')
  findOne(@Param('id') params: any): string {
    return `This action returns plant with id #${params.id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return `You have updated plant with id of ${id} with the data ${JSON.stringify(updatePlantDto)}`;
  }
}

// nest g controller plants
