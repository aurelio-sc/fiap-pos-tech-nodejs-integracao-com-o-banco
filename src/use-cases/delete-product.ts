import { IProductRepository } from '@/repositories/product.repository.interface'

export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  handler(id: string): Promise<void> {
    return this.productRepository.delete(id)
  }
}
