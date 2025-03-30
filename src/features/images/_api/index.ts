import type { ErrorResponse, Photos } from "pexels";
import { pexelsClient } from "../../api";

export async function getImages(): Promise<Photos | ErrorResponse> {
  const data = await pexelsClient.photos.curated();

  return data;
}
