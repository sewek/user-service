import {
   ArgumentsHost,
   Catch,
   ExceptionFilter,
   HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class UnauthorizedHttpExceptionFilter implements ExceptionFilter {
   catch(exception: HttpException, host: ArgumentsHost) {
      const response = host.switchToHttp().getResponse<Response>();
      const statusCode = exception.getStatus();

      if (statusCode === 401) {
         response.setHeader(
            'WWW-Authenticate',
            'Basic realm="Access to the API"',
         );
      }

      response.status(statusCode).json(exception.getResponse());
   }
}
