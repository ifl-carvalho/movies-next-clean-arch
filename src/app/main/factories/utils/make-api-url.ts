import { API_BASE_URL } from '@/app/main/constants'

export const makeApiUrl = (path: string) => `${API_BASE_URL}${path}`
