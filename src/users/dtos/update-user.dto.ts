import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';
export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  password: string;
}
