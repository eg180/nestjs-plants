import { Injectable } from '@nestjs/common';
import { Plant } from './interfaces';

@Injectable()
export class PlantsService {
  private readonly plants: Plant[] = [];

  create(plant: Plant) {
    this.plants.push(plant);
  }

  findAll(limit: number = this.plantCount): Plant[] {
    return this.plants.slice(0, limit);
  }

  get plantCount() {
    return this.plants.length;
  }
}

// nest g service plants
