import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
   constructor(private configService: ConfigService) {}

   validate(username: string, password: string) {
      const auth_data = {
         username: this.configService.get<string>('auth.user'),
         password: this.configService.get<string>('auth.pass'),
      };

      if (
         auth_data.username &&
         auth_data.username === username &&
         auth_data.password &&
         auth_data.password === password
      ) {
         return true;
      }

      return false;
   }
}
