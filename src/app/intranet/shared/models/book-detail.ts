import {Book} from './book';

export interface BookDetail {
  signature ?: string;
  reference ?: string;
  available ?: boolean;
  availabilityDate ?: string;
  section ?: string;
  location ?: string;
  book ?: Book;
}
