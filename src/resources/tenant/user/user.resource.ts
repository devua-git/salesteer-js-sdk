import { z } from 'zod'
import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import { userManagedCustomerSchema } from '../customer/customer.types'
import { userSchema } from './user.types'
import type {
  UserRegisterRequest,
  UserPasswordResetRequest,
  UserSignInRequest,
  UserPasswordForgotRequest,
} from './user.types'

export class UserResource extends BaseResource {
  me = async () => {
    const res = await this.getHttp().get('users/me')
    return await parseWithFallbackAsync(userSchema, res.data)
  }

  managedCustomers = async () => {
    const res = await this.getHttp().get('user/customers')
    return await parseWithFallbackAsync(
      z.array(userManagedCustomerSchema),
      res.data
    )
  }

  register = async (data: UserRegisterRequest) => {
    const res = await this.getHttp().post('register', data)
    return parseWithFallbackAsync(userSchema, res.data)
  }

  signIn = async (data: UserSignInRequest) => {
    const res = await this.getHttp().post('sign-in', data)
    return parseWithFallbackAsync(userSchema, res.data)
  }

  signOut = async () => {
    await this.getHttp().post('sign-out', {})
  }

  passwordReset = async (data: UserPasswordResetRequest) => {
    await this.getHttp().post('password/reset', data)
  }

  passwordForgot = async (data: UserPasswordForgotRequest) => {
    await this.getHttp().post('password/forgot', data)
  }
}
