import type { ErrorResponse, PaginationParams } from 'pexels'
import type { PhotosDto } from '../../../shared/types'
import { pexelsClient } from '../../api'

export async function getImages({
  page,
  per_page,
  q,
}: PaginationParams): Promise<PhotosDto | ErrorResponse> {
  const api = q !== '' ? pexelsClient.photos.search : pexelsClient.photos.curated

  try {
    const data = await api({
      page,
      per_page,
      query: q,
    })

    return data as PhotosDto
  } catch (error) {
    throw error instanceof Response
      ? error
      : new Response("Couldn't load the images", { status: 500, statusText: 'Server Error' })
  }
}
