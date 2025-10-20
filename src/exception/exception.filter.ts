import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BaseException } from './base.exception';
import { FastifyRequest, FastifyReply } from 'fastify';

@Catch(BaseException)
export class BaseExceptionFilter implements ExceptionFilter {
    catch(exception: BaseException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest<FastifyRequest>();
        const response = context.getResponse<FastifyReply>();
        const statusCode = 500;
        const message = exception.message;

        response.status(statusCode).send({
            statusCode: statusCode,
            path: request.url,
            message: message,
        });
    }
}
