import { COLORS_LIST } from '@theme/colors';

import StarIcon from '@assets/icons/Stars.svg';
import CustomTypography from '@components/ui/CustomTypography';

import Movie from './Movie';

const Disappointed = () => {
  return (
    <>
      <div
        className="p-4 flex flex-col gap-2  rounded-2xl"
        style={{ border: `1px solid ${COLORS_LIST.Surface_OutlineVariant}` }}
      >
        <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground" className="p-4  text-center">
          امیدت، ناامید نشه
        </CustomTypography>
        <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
          <div className="flex justify-start items-center gap-2">
            <StarIcon />
            {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
          </div>

          <CustomTypography fontSize="Body_Medium" className="text-justify ">
            بعد از تجربه‌ی جنگ یا بحران شدید، خیلی‌ها نمی‌تونن به آدم‌ها، ساختارها، حتی احساسات خودشون اعتماد کن و حس
            می‌کنن هیچ چیز «واقعی» یا «پایدار» نیست و این یعنی روان هنوز در شوک و بی‌ثباتیه.
          </CustomTypography>
        </div>

        <Movie />
      </div>
    </>
  );
};

export default Disappointed;
