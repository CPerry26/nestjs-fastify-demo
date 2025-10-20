import { Module } from '@nestjs/common';
import { TokenGuard } from './token.guard';

@Module({
    providers: [TokenGuard],
})
export class GuardModule {}
