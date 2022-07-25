import {environment} from '@env';

export class EndPoints {
  static LIBRARY = environment.REST_CORE + '/library';
  static CUSTOMERS = EndPoints.LIBRARY + '/customers';
  static BOOKS = EndPoints.LIBRARY + '/books';
  static LOANS = EndPoints.LIBRARY + '/loans';
}
