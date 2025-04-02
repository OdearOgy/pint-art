import type { ErrorResponse, PaginationParams, Photos } from 'pexels'
import { pexelsClient } from '../../api'

export async function getImages({
  page = 0,
  per_page = 20,
}: PaginationParams): Promise<Photos | ErrorResponse> {
  const data = await pexelsClient.photos.curated({
    page,
    per_page,
  })

  return data
}
