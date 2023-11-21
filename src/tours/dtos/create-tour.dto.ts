import {
  IsNotEmpty,
  IsString,
  Length,
  IsInt,
  Min,
  IsUUID,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTourDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    return parseInt(value, 10);
  })
  price: number;

  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  url: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  mainCountry: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  imageMain: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  imagesGallery: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 200)
  shortDescription: string;

  @IsNotEmpty()
  @Length(100, 10000)
  longDescription: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    return parseInt(value, 10);
  })
  tourDurationDays: number;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  categoryId: string;
}
