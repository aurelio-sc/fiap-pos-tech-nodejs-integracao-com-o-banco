import { IPerson } from '@/use-cases/find-address-by-person-id'

export class Person implements IPerson {
  id?: number
  cpf: string
  name: string
  birth: Date
  email: string
  user_id?: number

  constructor(cpf: string, name: string, birth: Date, email: string) {
    this.cpf = cpf
    this.name = name
    this.birth = birth
    this.email = email
  }
}
