import {Author} from './author';
import {Category} from './category';

export interface SearchBook {
  isbn?: string;
  title?: string;
  edition?: string;
  releaseDate?: Date;
  summary?: string;
  authors?: Author[];
  categories?: Category[];
}
