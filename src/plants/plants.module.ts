import { Global, Module } from '@nestjs/common';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';

@Global() // When you want to provide a set of providers which should be available everywhere out-of-the-box (e.g., helpers, database connections, etc.), make the module global with the @Global() decorator.
@Module({
  controllers: [PlantsController],
  providers: [PlantsService],
  exports: [PlantsService], // Now any module that imports the PlantsModule has access to the PlantsService and will share the same instance with all other modules that import it as well.
})
export class PlantsModule {}

// The @Global() decorator makes the module global-scoped. Global modules should be registered only once, generally by the root or core module. In the above example, the PlantsService provider will be ubiquitous, and modules that wish to inject the service will not need to import the CatsModule in their imports array.

// HINT
// Making everything global is not a good design decision. Global modules are available to reduce the amount of necessary boilerplate. The imports array is generally the preferred way to make the module's API available to consumers.
