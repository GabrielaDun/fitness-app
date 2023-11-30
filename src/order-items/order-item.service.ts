import { Injectable } from '@nestjs/common';
import { OrderItem } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateOrderItemDTO } from './dtos/create-orderItem.dto';

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
  public async create(orderItemsData: CreateOrderItemDTO): Promise<OrderItem> {
    console.log('orderItemsData backend:', orderItemsData);
    try {
      const createdItems = await this.prismaService.orderItem.createMany({
        data: orderItemsData,
      });
      console.log('Create Items [0]', createdItems[0]);
      return createdItems[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
