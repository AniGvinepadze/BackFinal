import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { Subscription } from 'src/enums/subscription.enum';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  password: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  industry: string;

  @IsEnum(Subscription)
  subscriptionPlan: Subscription; 
}
