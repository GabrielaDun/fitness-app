import { IsNotEmpty, IsString, IsInt, Min, IsUUID } from 'class-validator';

export class UpdateOrderItemDTO {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  @IsUUID()
  readonly orderId: string;

  @IsNotEmpty()
  @IsUUID()
  tourId: string;
}
