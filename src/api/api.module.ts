import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UsersController } from './users/users.controller';
import { DomainModule } from '../domains/domain.module';

@Module({
   imports: [DomainModule],
   controllers: [UserController, UsersController],
})
export class APIModule {}
