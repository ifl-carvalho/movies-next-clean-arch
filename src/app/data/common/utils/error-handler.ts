import {
  AccessDeniedError,
  BadRequestError,
  InternalServerError,
  NotFoundError,
  UnexpectedError
} from '@/app/domain/common/errors'

import { HttpResponse } from '@/app/data/protocols/http'

export function responseHandler<T>({ status, body }: HttpResponse<T>) {
  if (status < 300) return body

  switch (status) {
    case 400:
      throw new BadRequestError(body)
    case 401:
      throw new AccessDeniedError(body)
    case 403:
      throw new AccessDeniedError(body)
    case 404:
      throw new NotFoundError(body)
    case 500:
      throw new InternalServerError(body)
    default:
      throw new UnexpectedError(body)
  }
}
