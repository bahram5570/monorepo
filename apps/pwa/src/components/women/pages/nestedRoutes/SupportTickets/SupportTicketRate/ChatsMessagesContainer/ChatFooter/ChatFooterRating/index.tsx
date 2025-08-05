import Typography from '@components/ui/Typography';

import { ChatFooterRatingPropsType } from './type';

const ChatFooterRating = ({ rateDescription }: ChatFooterRatingPropsType) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <Typography scale="Lable" size="LargeProminet" color="Success_Success">
          نظر شما ثبت شده
        </Typography>
        <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant" textAlign="center">
          {rateDescription}
        </Typography>
      </div>
    </>
  );
};

export default ChatFooterRating;
