import { ICategory } from './category.interface'

export interface IProduct {
  id?: string
  name: string
  description: string
  image_url: string
  price: number
  categories?: ICategory[]
}
