import {
  IsNotEmpty,
  IsString,
  Length,
  IsInt,
  Min,
  IsUUID,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class OrderItemDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 15)
  description: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    return parseInt(value, 10);
  })
  quantity: number;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  orderId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  tourId: string;
}

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 15)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 15)
  surname: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  address: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  city: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 38)
  country: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  email: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    return parseInt(value, 10);
  })
  downPayment: number;

  @IsNotEmpty()
  orderItems: OrderItemDTO[];
}
