import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BasicStrategy as Strategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
   constructor(private authService: AuthService) {
      super();
   }

   validate(username: string, password: string) {
      if (!this.authService.validate(username, password)) {
         throw new UnauthorizedException();
      }

      return true;
   }
}
