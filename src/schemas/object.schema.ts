import { ApiProperty } from '@nestjs/swagger';
import { ResponseType } from './response';
import { SuccessResponseSchema } from './success.schema';

export class ObjectResponseSchema<T> extends SuccessResponseSchema<T> {
   @ApiProperty({ default: 'object' })
   type: ResponseType;
}
