import { ApiProperty } from '@nestjs/swagger';
import { ResponseType } from './response';
import { SuccessResponseSchema } from './success.schema';

export class ListResponseSchema<T> extends SuccessResponseSchema<T> {
   @ApiProperty({ default: 'list' })
   type: ResponseType;
}
