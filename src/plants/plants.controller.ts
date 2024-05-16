import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreatePlantDto, ListAllEntities, UpdatePlantDto } from './dto';
import { PlantsService } from './plants.service';
import { Plant } from './interfaces';
import { RolesGuard } from 'src/roles.guard';
import { Roles, Role } from 'src/roles.decorator';

// Note:  Controllers should handle HTTP requests and delegate more complex tasks to providers. Providers are plain JavaScript classes that are declared as providers in a module.

@Controller('plants')
@UseGuards(RolesGuard)
export class PlantsController {
  constructor(private plantService: PlantsService) {}

  @Post()
  @Roles([Role.ADMIN])
  async create(@Body(new ValidationPipe()) createPlantDto: CreatePlantDto) {
    this.plantService.create(createPlantDto);
  }

  @Get()
  async findAll(
    @Query()
    query: ListAllEntities,
  ): Promise<Plant[]> {
    try {
      return this.plantService.findAll(query.limit);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Something went wrong. :(',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }

    // console.log(query);
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return `This action returns plant with id #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return `You have updated plant with id of ${id} with the data ${JSON.stringify(updatePlantDto)}`;
  }
}

// nest g controller plants
