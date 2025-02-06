import { IProduct } from '@/entities/models/product.interface'
import { IProductRepository } from '@/repositories/product.repository.interface'

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(product: IProduct) {
    this.productRepository.create(product)
  }
}
