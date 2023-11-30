import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({ include: { orderItems: true } });
  }
  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: { orderItems: true },
    });
  }
  public async create(
    orderData: Omit<Order, 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    try {
      return await this.prismaService.order.create({
        data: {
          ...orderData,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
