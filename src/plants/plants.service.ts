import { Injectable } from '@nestjs/common';
import { Plant } from './interfaces';

@Injectable()
export class PlantsService {
  private readonly plants: Plant[] = [];

  create(plant: Plant) {
    this.plants.push(plant);
  }

  findAll(limit?: number): Plant[] {
    console.log(limit);
    return this.plants.slice(0, limit);
  }
}

// nest g service plants
