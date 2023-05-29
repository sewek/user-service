import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from './user.persistence.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
   imports: [ConfigModule],
   providers: [UserRepositoryProvider],
   exports: [UserRepositoryProvider],
})
export class UserRepositoryModule {}
