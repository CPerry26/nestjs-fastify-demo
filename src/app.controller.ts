import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    UseFilters,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TokenGuard } from './modules/guards/token.guard';
import { BaseException } from './exception/base.exception';
import { BaseExceptionFilter } from './exception/exception.filter';
import { CachingInterceptor } from './interceptor/caching.interceptor';
import { ParamDecorator } from './decorator/param.decorator';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @UseGuards(TokenGuard)
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/exception')
    @UseFilters(BaseExceptionFilter)
    testExceptionFilter(): string {
        throw new BaseException('blah');
    }

    @Get('/pipe/:id')
    testPipes(@Param('id', ParseIntPipe) id: number): string {
        return '' + id;
    }

    @Get('/interceptors')
    @UseInterceptors(CachingInterceptor)
    testInterceptor(): number[] {
        return [1];
    }

    @Get('/decorator/:id')
    @ParamDecorator(1)
    testDecorator(@Param('id') id: number): number {
        return id;
    }
}
