import { makeFindAddressByPersonIdUseCase } from '@/use-cases/factory/make-find-address-by-person-id-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findAddressByPersonId(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    person_id: z.coerce.number(),
  })

  const registerQuerySchema = z.object({
    page: z.coerce.number(),
    limit: z.coerce.number(),
  })

  const { person_id } = registerParamsSchema.parse(request.params)

  const { page, limit } = registerQuerySchema.parse(request.query)

  const findAddressByPersonIdUseCase = makeFindAddressByPersonIdUseCase()

  const address = await findAddressByPersonIdUseCase.handler(
    person_id,
    page,
    limit,
  )

  return reply.status(200).send(address)
}
