import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTagsDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 25)
  tag: string;
}
