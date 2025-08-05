import { COLORS_LIST } from '@theme/colors';

import StarIcon from '@assets/icons/Stars.svg';
import CustomTypography from '@components/ui/CustomTypography';

import Book from './Book';

const Depression = () => {
  return (
    <>
      <div
        className="p-4 flex flex-col gap-2  rounded-2xl"
        style={{ border: `1px solid ${COLORS_LIST.Surface_OutlineVariant}` }}
      >
        <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground" className="p-4  text-center">
          غم به دلت راه نده
        </CustomTypography>
        <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
          <div className="flex justify-start items-center gap-2">
            <StarIcon />
            {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
          </div>

          <CustomTypography fontSize="Body_Medium" className="text-justify ">
            افسردگی ناشی از جنگ، یک وضعیت روانی عمیق و فرساینده‌ست که در اثر تجربه‌ی مستقیم یا غیرمستقیمِ ترس، مرگ،
            آوارگی یا فشارهای بلندمدت ناشی از جنگ به‌وجود میاد.
          </CustomTypography>
        </div>

        <Book />
      </div>
    </>
  );
};

export default Depression;
