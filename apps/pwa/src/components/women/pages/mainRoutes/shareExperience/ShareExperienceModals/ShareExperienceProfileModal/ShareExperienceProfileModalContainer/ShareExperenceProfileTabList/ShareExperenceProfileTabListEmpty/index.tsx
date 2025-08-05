import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

const ShareExperenceProfileTabListEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16">
      <CustomImage src="/assets/images/noComment.svg" width={100} />

      <Typography scale="Body" size="Medium">
        هنوز هیچ فعالیتی ثبت نشده
      </Typography>
    </div>
  );
};

export default ShareExperenceProfileTabListEmpty;
