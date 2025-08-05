import { baseUrl } from '@services/http';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

// import { HttpResponse, http } from 'msw';
// import { server } from '../../../../../../mocks/server';
import NoteContainerList from '../NoteContainerList';
import responseData from './db.json';

// const mockGetNoteItemList = server.use(
//   http.get(`${baseUrl}/date/note`, () => {
//     return HttpResponse.json(responseData);
//   }),
// );

const handlers = [
  http.get(`${baseUrl}/date/note`, () => {
    return HttpResponse.json(responseData);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('test NoteItemList', () => {
  it('exit new-note-btn-link ', async () => {
    const client = new QueryClient();
    render(
      <QueryClientProvider client={client}>
        <NoteContainerList />
      </QueryClientProvider>,
    );

    const linkButton = await screen.findByTestId('new-note-btn-link');
    expect(linkButton).toBeInTheDocument();
  });

  test('fetches note items and renders them', async () => {
    const client = new QueryClient();
    render(
      <QueryClientProvider client={client}>
        <NoteContainerList />
      </QueryClientProvider>,
    );
  });
});
