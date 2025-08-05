import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Typography from '@components/ui/Typography';

import useSubmit from './__hooks__/useSubmit';
import { RateModalPropsType } from './type';

const RateModal = ({ rate, rateDescription }: RateModalPropsType) => {
  const { isLoading, submitHandler } = useSubmit();
  return (
    <CustomModal>
      <div className="flex flex-col gap-4 p-4 justify-center items-center max-w-sm">
        <Typography scale="Title" size="Medium" color="Success_Success">
          نظر شما ثبت شد
        </Typography>
        <Typography scale="Body" size="Medium" color="Neutral_OnSurface" textAlign="center">
          بابت ثبت نظرت ازت ممنونیم، کمک بزرگی به تیم ایمپو برای بهبود اپلیکیشن کردی
        </Typography>
        <Button
          size="medium"
          variant="fill"
          color="primary"
          className="mt-auto"
          onClick={() => submitHandler({ rate, rateDescription })}
          isLoading={isLoading}
        >
          ثبت نظر
        </Button>
      </div>
    </CustomModal>
  );
};

export default RateModal;
