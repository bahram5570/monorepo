import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

const CommentsListEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-10">
      <CustomImage src="/assets/images/noComment.svg" width={100} />

      <Typography scale="Body" size="Medium">
        هنوز هیچ نظری برای تجربه تو ثبت نشده
      </Typography>
    </div>
  );
};

export default CommentsListEmpty;
