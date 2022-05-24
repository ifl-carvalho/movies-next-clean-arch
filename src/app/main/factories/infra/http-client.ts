import { AxiosHttpClient } from '@/app/infra/http'

export const makeHttpClient = <T>() => new AxiosHttpClient<T>()
