import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './dtos/create-categories.dto';
import { UpdateCategoryDTO } from './dtos/update-categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('/')
  getAll() {
    return this.categoriesService.getAll();
  }
  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const category = await this.categoriesService.getById(id);
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
  @Post('/')
  create(@Body() categoryData: CreateCategoryDTO) {
    return this.categoriesService.create(categoryData);
  }
  @Put('/:id')
  async edit(
    @Body() categoryData: UpdateCategoryDTO,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    const category = await this.categoriesService.getById(id);
    if (!category) throw new NotFoundException('Category not found');
    else {
      await this.categoriesService.edit(id, categoryData);
      return { sucess: true };
    }
  }
  @Delete('/:id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    const category = await this.categoriesService.getById(id);
    if (!category) throw new NotFoundException('Category does not exist');
    else {
      await this.categoriesService.delete(id);
      return { sucess: true };
    }
  }
}
