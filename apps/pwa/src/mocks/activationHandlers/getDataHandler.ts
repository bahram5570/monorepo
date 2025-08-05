import { baseUrl } from '@services/http';

import { HttpResponse, http } from 'msw';

import responseData from './db.json';

export const getDataHandler = [
  http.get(`${baseUrl}/woman/account/questions`, () => {
    return HttpResponse.json(responseData);
  }),
];
