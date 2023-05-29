import { ApiProperty } from '@nestjs/swagger';
import { Response, ResponseStatus } from './response';

export class SuccessResponseSchema<T> implements Response<T> {
   @ApiProperty({ default: 'ok' })
   status: ResponseStatus;

   @ApiProperty({
      type: 'string',
      example: 'b3edd99e-b100-43f6-bac0-47bc46edc7f4',
   })
   requestId: string;

   @ApiProperty()
   data: T;

   @ApiProperty({ example: false })
   isEmpty: boolean;
}
