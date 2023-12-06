import { OrderItemService } from './order-item.service';
import { CreateOrderItemDTO } from './dtos/create-orderItem.dto';
import { UpdateOrderItemDTO } from './dtos/update-orderItem.dto';
export declare class OrderItemController {
    private ordersItemService;
    constructor(ordersItemService: OrderItemService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        description: string;
        quantity: number;
        orderId: string;
        tourId: string;
    }>;
    create(orderData: CreateOrderItemDTO): Promise<{
        id: string;
        description: string;
        quantity: number;
        orderId: string;
        tourId: string;
    }>;
    edit(orderItemData: UpdateOrderItemDTO, id: string): Promise<{
        sucess: boolean;
    }>;
    delete(id: string): Promise<{
        sucess: boolean;
    }>;
}
