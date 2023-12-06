import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        firstName: string;
        surname: string;
        address: string;
        city: string;
        country: string;
        email: string;
        downPayment: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(orderData: CreateOrderDTO): Promise<{
        id: string;
        firstName: string;
        surname: string;
        address: string;
        city: string;
        country: string;
        email: string;
        downPayment: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
