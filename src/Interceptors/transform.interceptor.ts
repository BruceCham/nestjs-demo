import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((response) => {
        if (response && response.hasOwnProperty('statusCode')) {
          return {
            statusCode: response['statusCode'],
            message: response['message'],
            data: response['data'],
          };
        } else {
          return {
            statusCode: 0,
            message: 'success',
            data: response,
          };
        }
      }),
    );
  }
}
