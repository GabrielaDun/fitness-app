import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export class CreateOrderItemDTO {
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  orderId: string;

  @IsNotEmpty()
  tourId: string;
}
