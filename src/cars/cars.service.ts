import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entities/car.schema';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}
  create(createCarDto: CreateCarDto, userId: string) {
    const createdCar = new this.carModel({ ...createCarDto, userId });
    return createdCar.save();
  }

  findAll(userId: string) {
    return this.carModel.find({ userId: userId }).exec();
  }

  findOne(id: string, userId: string) {
    return this.carModel.findOne({ _id: id, userId: userId }).exec();
  }

  update(id: string, updateUserDto: UpdateCarDto, userId: string) {
    return this.carModel
      .findOneAndUpdate(
        { _id: id, userId: userId },
        { $set: { ...UpdateCarDto, userId } },
        {
          new: true,
        },
      )
      .exec();
  }

  remove(id: string, userId: string) {
    return this.carModel.findOneAndDelete({ _id: id, userId: userId }).exec();
  }
}
