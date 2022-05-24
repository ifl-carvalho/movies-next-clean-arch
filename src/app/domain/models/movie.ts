import { Appended } from '@/app/domain/common/models/'
import { GenreModel, VideoModel } from '@/app/domain/models'

export type MovieModel = {
  id: number
  genre_ids: number[]
  title: string
  original_title: string
  overview: string
  poster_path: string
  backdrop_path: string
  popularity: number
  vote_count: number
  vote_average: number
  original_language: string
  adult: boolean
  video: boolean
  release_date: string
}

export type MovieDetailsModel = {
  budget: number
  homepage: string
  imdb_id: string
  overview: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  genres: GenreModel[]
  videos: Appended<VideoModel[]>
}
