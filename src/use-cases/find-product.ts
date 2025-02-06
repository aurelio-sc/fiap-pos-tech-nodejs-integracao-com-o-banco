import { IProductRepository } from '@/repositories/product.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { IProduct } from '@/entities/models/product.interface'

export class FindProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(id: string): Promise<IProduct | null> {
    const product = this.productRepository.findById(id)

    if (!product) {
      throw new ResourceNotFoundError()
    }

    return product
  }
}
