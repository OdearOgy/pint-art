import type { ErrorResponse, Photo } from 'pexels'
import { pexelsClient } from '../../../api'

export async function getImage({ id }: { id: number | string }): Promise<Photo | ErrorResponse> {
  const data = await pexelsClient.photos.show({ id })

  return data
}
