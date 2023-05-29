import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Get as GetUser } from '../../domains/user/get';
import {
   ApiBadRequestResponse,
   ApiBasicAuth,
   ApiOkResponse,
   ApiOperation,
   ApiTags,
   getSchemaPath,
} from '@nestjs/swagger';
import { ErrorResponseSchema } from 'src/schemas/error.schema';
import { UserResponseSchema } from 'src/schemas/user.schema';

@Controller('user')
@UseGuards(AuthGuard('basic'))
@ApiTags('user')
@ApiBasicAuth('basic')
export class UserController {
   constructor(private getUser: GetUser) {}

   @Get(':uid')
   @ApiOperation({ summary: 'Get user by id' })
   @ApiOkResponse({
      schema: { $ref: getSchemaPath(UserResponseSchema) },
      type: UserResponseSchema,
   })
   @ApiBadRequestResponse({
      schema: { $ref: getSchemaPath(ErrorResponseSchema) },
      type: ErrorResponseSchema,
   })
   async findOne(@Param('uid') uid: string) {
      const user_id = Number(uid);

      if (!Number.isInteger(user_id)) {
         return {
            statusCode: 400,
            error: {
               code: 'wrong_uid_format',
               message: 'User id param is not a number!',
            },
         };
      }

      const user = await this.getUser.Get(user_id);

      return {
         data: user,
      };
   }
}
