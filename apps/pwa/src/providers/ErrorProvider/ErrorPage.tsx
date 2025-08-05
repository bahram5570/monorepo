import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

const ErrorPage = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 min-h-[90dvh] max-h-[90dvh] w-full flex flex-col justify-end m-auto px-4 py-5 z-20"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="flex flex-col items-center my-auto">
        <CustomImage className="w-[200px] h-auto" src="/assets/images/serverError.webp" />

        <Typography scale="Title" size="Medium" textAlign="center" className="pt-8 pb-2">
          ارتباط با ایمپو امکان پذیر نیست
        </Typography>

        <Typography scale="Body" size="Medium" color="Surface_Outline" textAlign="center" className="px-5">
          مشکلی برامون پیش اومده که در حال بررسی و حلش هستیم. لطفا چند دقیقه دیگه دوباره امتحان کن
        </Typography>
      </div>

      <Button variant="fill" size="large" color="primary" onClick={() => window.location.reload()}>
        تلاش مجدد
      </Button>
    </div>
  );
};

export default ErrorPage;
