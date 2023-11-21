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
import { TagsService } from './tags.service';
import { CreateTagsDTO } from './dtos/create-tags-dto';
import { UpdateTagsDTO } from './dtos/update-tags-dto';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Get('/')
  getAll() {
    return this.tagsService.getAll();
  }
  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const category = await this.tagsService.getById(id);
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
  @Post('/')
  create(@Body() categoryData: CreateTagsDTO) {
    return this.tagsService.create(categoryData);
  }
  @Put('/:id')
  async edit(
    @Body() categoryData: UpdateTagsDTO,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    const category = await this.tagsService.getById(id);
    if (!category) throw new NotFoundException('Category not found');
    else {
      await this.tagsService.edit(id, categoryData);
      return { sucess: true };
    }
  }
  @Delete('/:id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    const category = await this.tagsService.getById(id);
    if (!category) throw new NotFoundException('Category does not exist');
    else {
      await this.tagsService.delete(id);
      return { sucess: true };
    }
  }
}
