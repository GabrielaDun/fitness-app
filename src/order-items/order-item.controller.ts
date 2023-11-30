import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDTO } from './dtos/create-orderItem.dto';
import { UpdateOrderItemDTO } from './dtos/update-orderItem.dto';

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
  @Put('/:id')
  async edit(
    @Body() orderItemData: UpdateOrderItemDTO,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    const orderitem = await this.ordersItemService.getById(id);
    if (!orderitem) throw new NotFoundException('Category not found');
    else {
      await this.ordersItemService.edit(id, orderItemData);
      return { sucess: true };
    }
  }
  @Delete('/:id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    const orderitem = await this.ordersItemService.getById(id);
    if (!orderitem) throw new NotFoundException('OrderItem does not exist');
    else {
      await this.ordersItemService.delete(id);
      return { sucess: true };
    }
  }
}
