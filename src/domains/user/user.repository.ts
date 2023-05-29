import { User } from './user';

export interface IUserRepository {
   ListAll(): Promise<Array<User>>;
   GetById(uid: number): Promise<User>;
}
