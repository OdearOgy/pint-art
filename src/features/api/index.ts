import { createClient } from "pexels";
import { IMAGES_API_KEY } from "./constants";

export const pexelsClient = createClient(IMAGES_API_KEY);
