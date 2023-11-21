import { Injectable } from '@nestjs/common';
import { Tag } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Tag[]> {
    return this.prismaService.tag.findMany();
  }
  public getById(id: Tag['id']): Promise<Tag | null> {
    return this.prismaService.tag.findUnique({
      where: { id },
    });
  }
  public create(tagData: Omit<Tag, 'id'>): Promise<Tag> {
    return this.prismaService.tag.create({
      data: tagData,
    });
  }
  public edit(id: Tag['id'], tagData: Omit<Tag, 'id'>): Promise<Tag> {
    return this.prismaService.tag.update({
      where: { id },
      data: tagData,
    });
  }
  public delete(id: Tag['id']): Promise<Tag | null> {
    return this.prismaService.tag.delete({
      where: { id },
    });
  }
}
