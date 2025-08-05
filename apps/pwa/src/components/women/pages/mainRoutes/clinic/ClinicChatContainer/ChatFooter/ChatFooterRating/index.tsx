import Button from '@components/ui/Button';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { RATING_QUERY_NAME } from './constants';

const ChatFooterRating = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  return (
    <>
      <Button
        size="medium"
        variant="fill"
        color="primary"
        navigationLoadingId="ChatFooterRating"
        onClick={() => newQueryParamsHandler({ [RATING_QUERY_NAME]: 'true' })}
      >
        ثبت نظر
      </Button>
    </>
  );
};

export default ChatFooterRating;
