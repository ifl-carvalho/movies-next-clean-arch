export class BadRequestError extends Error {
  constructor(readonly data: unknown) {
    super('Bad Request')
    this.name = 'BadRequestError'
  }
}
