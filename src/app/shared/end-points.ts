import {environment} from '@env';

export class EndPoints {
  static LIBRARY = environment.REST_CORE + '/library';
  static CUSTOMERS = EndPoints.LIBRARY + '/customers';
  static BOOKS = EndPoints.LIBRARY + '/books';
  static COPY_BOOKS = EndPoints.LIBRARY + '/copyBooks';
  static LOANS = EndPoints.LIBRARY + '/loans';
  static AUTHORS = EndPoints.LIBRARY + '/authors';

  static RESOURCE_BOOK = '/book';
}
