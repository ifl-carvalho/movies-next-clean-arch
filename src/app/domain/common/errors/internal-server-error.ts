export class InternalServerError extends Error {
  constructor(readonly data: unknown) {
    super('Internal Server Error')
    this.name = 'InternalServerError'
  }
}
