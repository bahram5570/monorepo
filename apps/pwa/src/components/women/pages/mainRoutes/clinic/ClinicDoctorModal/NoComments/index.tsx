import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

const NoComments = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3 pt-36">
      <CustomImage src="/assets/images/noComments.webp" width={120} height={50} />

      <Typography scale="Body" size="Medium">
        نظری برای این دکتر ثبت نشده
      </Typography>
    </div>
  );
};

export default NoComments;
