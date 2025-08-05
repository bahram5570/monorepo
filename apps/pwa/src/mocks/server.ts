import { setupServer } from 'msw/node';

import { getDataHandler } from './activationHandlers/getDataHandler';

const handlers = [...getDataHandler];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
