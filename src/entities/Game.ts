import Genre from './Genre';
import Platform from './Platform';
import Publisher from './Publisher';

export default interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
}
