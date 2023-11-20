import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ToursService } from './tours.service';
import { CreateTourDTO } from './dtos/create-tour.dto';
import { UpdateTourDTO } from './dtos/update-tour.dto';

@Controller('tours')
export class ToursController {
  constructor(private toursService: ToursService) {}

  @Get('/')
  getAll(): any {
    return this.toursService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const tour = await this.toursService.getById(id);
    if (!tour) throw new NotFoundException('Tour not found');
    return tour;
  }
  @Post('/')
  create(@Body() tourData: CreateTourDTO) {
    return this.toursService.create(tourData);
  }
  @Put('/:id')
  async edit(
    @Body() tourData: UpdateTourDTO,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    const tour = await this.toursService.getById(id);
    if (!tour) throw new NotFoundException('Tour not found');
    else {
      await this.toursService.edit(id, tourData);
      return { sucess: true };
    }
  }
  @Delete('/:id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    const tour = await this.toursService.getById(id);
    if (!tour) throw new NotFoundException('Tour does not exist');
    else {
      await this.toursService.delete(id);
      return { sucess: true };
    }
  }
}
