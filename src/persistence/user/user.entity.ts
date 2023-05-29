import { Address, Company, User } from '../../domains/user/user';
import { ApiProperty } from '@nestjs/swagger';

export type IUserEntity = User;
export type IAddressEntity = Address;
export type ICompanyEntity = Company;

export class AddressEntity implements IAddressEntity {
   constructor(partial: Partial<AddressEntity>) {
      Object.assign(this, partial);
   }

   @ApiProperty()
   street: string;

   @ApiProperty()
   suite: string;

   @ApiProperty()
   city: string;

   @ApiProperty()
   zipcode: string;

   @ApiProperty()
   geo: { lat: string; lng: string };
}

export class CompanyEntity implements ICompanyEntity {
   constructor(partial: Partial<CompanyEntity>) {
      Object.assign(this, partial);
   }

   @ApiProperty()
   name: string;

   @ApiProperty()
   catchPhrase: string;

   @ApiProperty()
   bs: string;
}

export class UserEntity implements IUserEntity {
   constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
   }

   @ApiProperty()
   id: number;

   @ApiProperty()
   name: string;

   @ApiProperty()
   username: string;

   @ApiProperty()
   email: string;

   @ApiProperty()
   phone: string;

   @ApiProperty()
   website: string;

   @ApiProperty()
   address: AddressEntity;

   @ApiProperty()
   company: CompanyEntity;
}
