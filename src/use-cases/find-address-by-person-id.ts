import { IAddress } from '@/entities/models/address.interface'
import { IPerson } from '@/entities/models/person.interface'
import { IAddressRepository } from '@/repositories/address.repository.interface'

export class FindAddressByPersonId {
  constructor(private addressRepository: IAddressRepository) {}

  async handler(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]> {
    return await this.addressRepository.findAddressByPersonId(
      personId,
      page,
      limit,
    )
  }
}
