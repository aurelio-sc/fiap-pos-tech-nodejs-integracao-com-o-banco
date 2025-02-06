import { AddressRepository } from '@/repositories/pg/address.repository'
import { FindAddressByPersonId } from '../find-address-by-person-id'

export function makeFindAddressByPersonIdUseCase() {
  const addressRepository = new AddressRepository()

  const findAddressByPersonIdUseCase = new FindAddressByPersonId(
    addressRepository,
  )

  return findAddressByPersonIdUseCase
}
