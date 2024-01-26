import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MaxLength,
} from 'class-validator';
export class CreateStatuscodeDto {
    @ApiProperty({
        type: Number,
        example: '-1',
        required: true,
        description: 'รหัส',
      })
      @IsString()
      @IsNotEmpty()
      code: number;

      @ApiProperty({
        type: String,
        example: 'System is not ready. Please try to post again later.',
        required: true,
        description: 'คำอธิบาย(ภาษาอังกฤษ)',
      })
      @IsString()
      @IsNotEmpty()
      engVer: string;

      @ApiProperty({
        type: String,
        example: 'ระบบไม่พร้อมให้บริการ โปรดลองใหม่อีกครั้ง',
        required: true,
        description: 'คำอธิบาย(ภาษาไทย)',
      })
      @IsString()
      @IsNotEmpty()
      thVer: string;
}
