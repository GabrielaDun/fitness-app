import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Tour } from '@prisma/client';

@Injectable()
export class ToursService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Tour[]> {
    return this.prismaService.tour.findMany({ include: { category: true } });
  }
  public getById(id: Tour['id']): Promise<Tour | null> {
    return this.prismaService.tour.findUnique({
      where: { id },
      include: { category: true },
    });
  }
  public create(
    tourData: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Tour> {
    const { categoryId, ...otherData } = tourData;
    try {
      return this.prismaService.tour.create({
        data: {
          ...otherData,
          category: {
            connect: { id: categoryId },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new BadRequestException('Tour does not exist');
    }
  }
  public edit(
    id: Tour['id'],
    tourData: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Tour> {
    const { categoryId, ...otherData } = tourData;
    return this.prismaService.tour.update({
      where: { id },
      data: {
        ...otherData,
        category: { connect: { id: categoryId } },
      },
    });
  }
  public delete(id: Tour['id']): Promise<Tour | null> {
    return this.prismaService.tour.delete({
      where: { id },
    });
  }
}
