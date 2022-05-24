export class AccessDeniedError extends Error {
  constructor(readonly data: unknown) {
    super('Access Denied')
    this.name = 'AccessDeniedError'
  }
}
