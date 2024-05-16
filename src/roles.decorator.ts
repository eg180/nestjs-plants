import { Reflector } from '@nestjs/core';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'CLIENT',
  MODERATOR = 'MODERATOR',
}

export const Roles = Reflector.createDecorator<Role[]>();
