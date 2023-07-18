import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('users/:userId/cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Param('userId') userId: string, @Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto, userId);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.carsService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('userId') userId: string) {
    return this.carsService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('userId') userId: string) {
    return this.carsService.remove(id, userId);
  }
}
