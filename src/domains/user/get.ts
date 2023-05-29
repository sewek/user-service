import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from './user.repository';

@Injectable()
export class Get {
   constructor(
      @Inject('UserRepository') private userRepository: IUserRepository,
   ) {}

   async Get(uid: number) {
      return await this.userRepository.GetById(uid);
   }
}
