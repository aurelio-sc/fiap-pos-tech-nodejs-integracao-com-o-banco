import { IUser } from '@/entities/models/user.interface'
import { IUserRepository } from '@/repositories/user.repository.interface'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(user: IUser): Promise<IUser | undefined> {
    return await this.userRepository.create(user)
  }
}
