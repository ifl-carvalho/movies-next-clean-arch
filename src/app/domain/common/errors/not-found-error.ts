export class NotFoundError extends Error {
  constructor(readonly data: unknown) {
    super('Not Found')
    this.name = 'NotFoundError'
  }
}
