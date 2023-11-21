import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateCategoryDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 25)
  category: string;
}
