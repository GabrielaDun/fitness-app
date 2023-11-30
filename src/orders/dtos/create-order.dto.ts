import { IsNotEmpty, IsString, IsEmail, IsInt, Min } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  downPayment: number;
}
