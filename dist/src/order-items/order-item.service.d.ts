import { OrderItem } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateOrderItemDTO } from './dtos/create-orderItem.dto';
export declare class OrderItemService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<OrderItem[]>;
    getById(id: OrderItem['id']): Promise<OrderItem | null>;
    create(orderItemsData: CreateOrderItemDTO): Promise<OrderItem>;
    edit(id: OrderItem['id'], orderItemData: Omit<OrderItem, 'id'>): Promise<OrderItem>;
    delete(id: OrderItem['id']): Promise<OrderItem | null>;
}
