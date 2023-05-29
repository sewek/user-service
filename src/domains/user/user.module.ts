import { Module } from '@nestjs/common';
import { Get } from './get';
import { List } from './list';
import { UserRepositoryModule } from '../../persistence/user/user.repository.module';

@Module({
   imports: [UserRepositoryModule],
   providers: [Get, List],
   exports: [Get, List],
})
export class UserModule {}
