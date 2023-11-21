import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Category[]> {
    return this.prismaService.category.findMany();
  }
  public getById(id: Category['id']): Promise<Category | null> {
    return this.prismaService.category.findUnique({
      where: { id },
    });
  }
  public create(categoryData: Omit<Category, 'id'>): Promise<Category> {
    return this.prismaService.category.create({
      data: categoryData,
    });
  }
  public edit(
    id: Category['id'],
    categoryData: Omit<Category, 'id'>,
  ): Promise<Category> {
    return this.prismaService.category.update({
      where: { id },
      data: categoryData,
    });
  }
  public delete(id: Category['id']): Promise<Category | null> {
    return this.prismaService.category.delete({
      where: { id },
    });
  }
}
