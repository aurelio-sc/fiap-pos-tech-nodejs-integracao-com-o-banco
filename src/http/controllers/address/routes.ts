import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findAddressByPersonId } from './find-address-by-person-id'

export async function addressRoutes(app: FastifyInstance) {
  app.post('/address', create)
  app.get('/address/person/:person_id', findAddressByPersonId)
}
