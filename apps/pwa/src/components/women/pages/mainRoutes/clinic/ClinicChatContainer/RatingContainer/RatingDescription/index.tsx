import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import RatingDescriptionModal from './RatingDescriptionModal';
import { RatingDescriptionProps } from './types';

const RatingDescription = ({ rate, description, descriptionHandler, onClick }: RatingDescriptionProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const commentTicketId = 'commentTicketId';
  const isLoading = pageNavigationLoading === commentTicketId;

  const openModalHandler = () => {
    if (!isLoading) {
      newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' });
      pageNavigationHandler({ showProgressBar: false, id: commentTicketId });
    }
  };

  return (
    <>
      {rate > 0 && (
        <>
          <div className="flex flex-col items-end gap-2 pt-6 pb-4  cursor-pointer" onClick={openModalHandler}>
            <Typography scale="Body" size="Small">
              لطفا نظرت رو برامون بنویس تا بتونیم بررسی کنیم و در آینده سرویس بهتری ارائه بدیم.
            </Typography>

            <div
              className="w-full h-10 flex items-center justify-end rounded-full px-4 border-[1px]"
              style={{ borderColor: colors.Neutral_Surface }}
            >
              {isLoading && (
                <div className="mx-auto">
                  <Spinner color="outline" width={24} />
                </div>
              )}

              {!isLoading && (
                <Typography scale="Body" size="Medium" color="Surface_Outline">
                  نظرت رو اینجا بنویس
                </Typography>
              )}
            </div>
          </div>

          <RatingDescriptionModal onClick={onClick} description={description} descriptionHandler={descriptionHandler} />
        </>
      )}
    </>
  );
};

export default RatingDescription;
