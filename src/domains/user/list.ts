import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from './user.repository';

@Injectable()
export class List {
   constructor(
      @Inject('UserRepository') private userRepository: IUserRepository,
   ) {}

   async List() {
      return await this.userRepository.ListAll();
   }
}
