import type { ErrorResponse, PaginationParams } from 'pexels'
import type { PhotosDto } from '../../../utils/types'
import { pexelsClient } from '../../api'

export async function getImages({
  page = 0,
  per_page = 20,
}: PaginationParams): Promise<PhotosDto | ErrorResponse> {
  const data = await pexelsClient.photos.curated({
    page,
    per_page,
  })

  return data as PhotosDto
}
