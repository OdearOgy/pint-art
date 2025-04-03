import type { ErrorResponse, PaginationParams } from 'pexels'
import type { PhotosDto } from '../../../shared/types'
import { pexelsClient } from '../../api'

export async function getImages({
  page,
  per_page,
  q,
}: PaginationParams): Promise<PhotosDto | ErrorResponse> {
  const api = q !== '' ? pexelsClient.photos.search : pexelsClient.photos.curated

  const data = await api({
    page,
    per_page,
    query: q,
  })

  return data as PhotosDto
}
