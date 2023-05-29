import {
   CallHandler,
   ExecutionContext,
   Injectable,
   InternalServerErrorException,
   NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Response } from '../schemas/response';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
   intercept(
      context: ExecutionContext,
      next: CallHandler<T>,
   ): Observable<Response<T>> {
      return next.handle().pipe(
         map((data) => {
            if (typeof data !== 'object') {
               throw new InternalServerErrorException();
            }

            const response: Response<T> = {
               status: 'error',
               requestId: uuidv4(),
            };

            const statusCode =
               'statusCode' in data
                  ? data.statusCode
                  : context.switchToHttp().getResponse().statusCode;
            const error =
               'error' in data && typeof data.error === 'object'
                  ? data.error
                  : undefined;

            if (error) {
               response.error = {
                  code:
                     'code' in error && typeof error.code === 'string'
                        ? error.code
                        : 'unknown',
                  message:
                     'message' in error && typeof error.message === 'string'
                        ? error.message
                        : 'Unknown',
               };
            } else {
               if (!('data' in data)) {
                  throw new InternalServerErrorException();
               }

               response.data = data.data as T;
               response.type = Array.isArray(data.data) ? 'list' : 'object';
               response.isEmpty = Array.isArray(data.data)
                  ? data.data.length === 0
                  : Object.keys(data.data).length === 0;

               if (statusCode === 200) {
                  response.status = 'ok';
               } else if (statusCode >= 300 && statusCode <= 399) {
                  response.status = 'redirect';
               }
            }

            context.switchToHttp().getResponse().status(statusCode);

            return response;
         }),
      );
   }
}
