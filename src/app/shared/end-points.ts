import {environment} from '@env';

export class EndPoints {
  static LIBRARY = environment.REST_CORE + '/library';
  static CUSTOMERS = EndPoints.LIBRARY + '/customers';
}
