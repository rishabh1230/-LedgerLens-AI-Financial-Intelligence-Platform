import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RecordType } from '../../common/enums/record-type.enum';

export class CreateRecordDto {
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsEnum(RecordType)
  type: RecordType;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  notes?: string;
}