import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import NoteContainerList from '../NoteContainerList';

describe('test NoteItemList', () => {
  test('exit new-note-btn-link ', async () => {
    const client = new QueryClient();
    render(
      <QueryClientProvider client={client}>
        <NoteContainerList />
      </QueryClientProvider>,
    );

    const linkButton = await screen.findByTestId('new-note-btn-link');
    expect(linkButton).toBeInTheDocument();
  });

  // test('fetches note items and renders them', async () => {
  //   const client = new QueryClient();
  //   render(
  //     <QueryClientProvider client={client}>
  //       <NoteContainerList />
  //     </QueryClientProvider>,
  //   );
  // });
});
