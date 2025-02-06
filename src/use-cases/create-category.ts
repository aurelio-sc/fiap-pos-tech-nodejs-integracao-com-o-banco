import { ICategoryRepository } from '@/repositories/category.repository.interface'

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async handler(name: string): Promise<void> {
    return await this.categoryRepository.create(name)
  }
}
