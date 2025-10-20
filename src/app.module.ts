import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardModule } from './modules/guards/guards.module';
import { Logger } from './middleware/logger.middleware';

@Module({
    imports: [GuardModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(Logger)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}
