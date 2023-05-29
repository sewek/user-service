import { ApiProperty } from '@nestjs/swagger';
import { Response, ResponseError, ResponseStatus } from './response';

export class ErrorResponseSchema implements Response<null> {
   @ApiProperty({ default: 'error' })
   status: ResponseStatus;

   @ApiProperty({
      type: 'string',
      example: 'b3edd99e-b100-43f6-bac0-47bc46edc7f4',
   })
   requestId: string;

   @ApiProperty({
      properties: { code: { type: 'string' }, message: { type: 'string' } },
      example: {
         code: 'wrong_uid_format',
         message: 'User id param is not a number!',
      },
   })
   error: ResponseError;
}
