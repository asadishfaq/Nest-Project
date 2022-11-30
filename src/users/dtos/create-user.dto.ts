import { IsEmail, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  address: string;

  @IsString()
  password: string;
}
