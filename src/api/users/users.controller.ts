import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { List as ListUsers } from '../../domains/user/list';
import {
   ApiBasicAuth,
   ApiOkResponse,
   ApiOperation,
   ApiTags,
   getSchemaPath,
} from '@nestjs/swagger';
import { UsersResponseSchema } from 'src/schemas/users.schema';

@Controller('users')
@UseGuards(AuthGuard('basic'))
@ApiTags('user')
@ApiBasicAuth('basic')
export class UsersController {
   constructor(private listUsers: ListUsers) {}

   @Get()
   @ApiOperation({ summary: 'Get all users' })
   @ApiOkResponse({
      schema: { $ref: getSchemaPath(UsersResponseSchema) },
      type: UsersResponseSchema,
   })
   async getAll() {
      const users = await this.listUsers.List();

      return {
         data: users,
      };
   }
}
