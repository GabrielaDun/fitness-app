import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Order, OrderItem } from '@prisma/client';
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
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
    orderItemsData: OrderItem[],
  ): Promise<Order> {
    try {
      return await this.prismaService.order.create({
        data: {
          ...orderData,
          orderItems: {
            create: orderItemsData,
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new BadRequestException('Order does not exist');
      } else {
        throw new InternalServerErrorException(
          'An error occurred while creating an order',
        );
      }
    }
  }
}
