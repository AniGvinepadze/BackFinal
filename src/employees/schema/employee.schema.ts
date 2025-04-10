import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { mongo } from 'mongoose';

@Schema()
export class Employee {
  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: Boolean, default: false })
  isVerified: boolean;

  @Prop({ type: String })
  otpCode: string;

  @Prop({ type: Date })
  otpCodeValidateDate: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company',
  })
  company: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'file',
    default: [],
  })
  file: mongoose.Schema.Types.ObjectId[];
}

export const employeeSchema = SchemaFactory.createForClass(Employee);
