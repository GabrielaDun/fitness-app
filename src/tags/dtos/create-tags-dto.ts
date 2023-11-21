import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTagsDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 25)
  tag: string;
}
