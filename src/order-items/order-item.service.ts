import { Injectable } from '@nestjs/common';
import { OrderItem } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<OrderItem[]> {
    return this.prismaService.orderItem.findMany();
  }
  public getById(id: OrderItem['id']): Promise<OrderItem | null> {
    return this.prismaService.orderItem.findUnique({
      where: { id },
    });
  }
  public async create(
    orderItemsData: Omit<OrderItem, 'id'>[],
  ): Promise<OrderItem[]> {
    console.log('orderItemsData backend:', orderItemsData);
    try {
      await this.prismaService.orderItem.createMany({
        data: orderItemsData,
      });

      // If you need to return the created items, you might need an additional query here
      return []; // Modify this as per your requirement
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
