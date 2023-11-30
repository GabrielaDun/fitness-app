import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDTO } from './dtos/create-orderItem.dto';

@Controller('orderItems')
export class OrderItemController {
  constructor(private ordersItemService: OrderItemService) {}

  @Get('/')
  getAll(): any {
    return this.ordersItemService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = await this.ordersItemService.getById(id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }
  @Post('/')
  create(@Body() orderData: CreateOrderItemDTO) {
    return this.ordersItemService.create(orderData);
  }
}
