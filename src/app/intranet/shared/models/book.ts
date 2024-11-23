import {Author} from "./author";
import {Category} from "./category";

export interface Book {
  isbn ?: string;
  title ?: string;
  author ?: string;
  releaseDate ?: Date;
  summary ?: string;
  numberOfCopies ?: number;
  authors ?: Array<Author>;
  categories ?: Array<Category>;
}
