import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { publisher } from "./Publisher";

export interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
