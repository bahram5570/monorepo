import { COLORS_LIST } from '@theme/colors';

import CustomTypography from '@components/ui/CustomTypography';

const QuestionContents = () => {
  return (
    <>
      {/* <CustomTypography fontSize="Body_Large" className="pb-2">
        توضیح کمپین:
      </CustomTypography> */}

      <CustomTypography fontSize="Body_Medium" className="pb-6">
        حس کردیم تنها کاری که ازمون بر میاد، ساختن یک پناه کوچک روانی‌ست— برای زنان، برای خانواده‌ها و برای هر کسی که در
        دل این شرایط به دنبال لحظه‌ای آرامشه. امیدواریم جان پناه بتونه لحظه ای هرچند کوتاه آرامش رو به هموطنانمون هدیه
        بده.
      </CustomTypography>

      <CustomTypography fontSize="Body_Large">به امید روزهایی پر از آرامش و حال خوب</CustomTypography>
      <div className="w-full my-3" style={{ border: `1px solid #D0D0D020` }}></div>
    </>
  );
};

export default QuestionContents;
