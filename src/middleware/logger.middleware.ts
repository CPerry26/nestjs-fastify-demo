import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class Logger implements NestMiddleware {
    use(
        request: FastifyRequest['raw'],
        response: FastifyReply['raw'],
        next: () => void,
    ) {
        console.log('Received request....');
        console.log(request);

        next();
    }
}
