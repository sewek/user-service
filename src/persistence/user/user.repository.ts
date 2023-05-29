import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IUserRepository } from '../../domains/user/user.repository';
import { IUserEntity, UserEntity } from './user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserRepository implements IUserRepository {
   constructor(private configService: ConfigService) {}

   async GetById(uid: number): Promise<IUserEntity> {
      const URL = this.configService
         .get<string>('database.url')
         .replace(/\/$/, '');
      const request = await axios.get(`${URL}/${uid}`);

      const user = request.data;

      if (!user) {
         throw new Error('User not found');
      }

      return new UserEntity(user);
   }

   async ListAll(): Promise<IUserEntity[]> {
      const URL = this.configService.get<string>('database.url');
      const request = await axios.get(URL);

      const users = request.data;

      if (!users || !Array.isArray(users)) {
         throw new Error('Users not found');
      }

      return users.map((user: any) => new UserEntity(user));
   }
}
