import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCategoryDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 25)
  category: string;
}
