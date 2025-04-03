import type { ErrorResponse, Photo } from 'pexels'
import { pexelsClient } from '../../../api'

export async function getImage({ id }: { id: number | string }): Promise<Photo | ErrorResponse> {
  try {
    const data = await pexelsClient.photos.show({ id })

    return data
  } catch (error) {
    throw error instanceof Response
      ? error
      : new Response("Couldn't load the image", { status: 500, statusText: 'Server Error' })
  }
}
