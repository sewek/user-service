export type ResponseStatus = 'ok' | 'redirect' | 'error';

export type ResponseType = 'object' | 'list';

export type ResponseError = { code: string; message: string };

export type Response<T> = {
   status: ResponseStatus;
   requestId: string;
   error?: ResponseError;
   type?: ResponseType;
   data?: T;
   isEmpty?: boolean;
};
