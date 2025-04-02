import { Photos } from 'pexels'

// NOTE: the pexels type do not include this property but they return it in the api response
export type PhotosDto = Photos & {
  total_results: number
}
