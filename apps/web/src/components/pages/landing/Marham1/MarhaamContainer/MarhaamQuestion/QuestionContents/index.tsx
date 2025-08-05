import CustomTypography from '@components/ui/CustomTypography';

const QuestionContents = () => {
  return (
    <>
      <CustomTypography fontSize="Body_Medium" className="pb-6">
        مرهم یه حرکت همدلانه‌ست، برای وقتی که دل و ذهن هنوز تو حال‌و‌هوای روزای سخت گیر کردن. اینجا قرار نیست چیزی یادت
        بره یا یکدفعه‌ای خوب شی، اینجا قراره چندتا قدم ساده برداریم، برای اینکه یه کم به خودت نزدیک‌تر بشی، و بدونی هنوز
        چیزایی هست که میشه بهشون تکیه کرد.
      </CustomTypography>

      <div className="w-full my-3" style={{ border: `1px solid #D0D0D020` }}></div>
    </>
  );
};

export default QuestionContents;
