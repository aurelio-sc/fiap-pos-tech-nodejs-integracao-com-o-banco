import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { CreateProductUseCase } from '../create.product'

export function makeCreateProductUseCase() {
  const productRepository = new ProductRepository()
  const createProductUseCase = new CreateProductUseCase(productRepository)

  return createProductUseCase
}
