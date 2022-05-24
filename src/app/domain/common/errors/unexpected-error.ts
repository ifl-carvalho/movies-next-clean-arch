export class UnexpectedError extends Error {
  constructor(readonly data: unknown) {
    super('Unexpected Error')
    this.name = 'UnexpectedError'
  }
}
