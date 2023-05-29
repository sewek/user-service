import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APIModule } from './api/api.module';
import { DomainModule } from './domains/domain.module';
import { PersistenceModule } from './persistence/persistence.module';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';

@Module({
   imports: [
      ConfigModule.forRoot({
         isGlobal: true,
         load: [configuration],
         envFilePath: '.env',
      }),
      AuthModule,
      APIModule,
      DomainModule,
      PersistenceModule,
   ],
})
export class AppModule {}
