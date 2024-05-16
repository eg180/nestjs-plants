import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log('the roles', roles);
    if (!roles) {
      return true;
    }
    // const request = context.switchToHttp().getRequest();

    // const user = request.user;

    // return roles.some((role) => user.roles.includes(role));
    // docs version -> return matchRoles(roles, user.roles);

    // DELETE THIS AND ADD THE AUTHENTICATION IMPLEMENTATION
    // be sure to uncomment the previous return statement
    return true;
  }
}
