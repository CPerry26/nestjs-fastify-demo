import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ParamDecorator = createParamDecorator(
    (data: number, ctx: ExecutionContext) => {
        console.log('Data is:');
        console.log(data);

        const request = ctx.switchToHttp().getRequest();
        console.log('Headers:');
        console.log(request.headers);

        return data;
    },
);
