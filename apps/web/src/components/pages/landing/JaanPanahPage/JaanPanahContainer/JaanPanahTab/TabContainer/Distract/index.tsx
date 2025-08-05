'use client';

import StarIcon from '@assets/icons/Stars.svg';
import CustomTypography from '@components/ui/CustomTypography';

import Book from './Book';
import Game from './Game';
import Movie from './Movie';
import { DistractPropsType } from './type';

const Distract = ({ children }: DistractPropsType) => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground" className="p-4  text-center">
        حواست رو پرت کن
      </CustomTypography>
      <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
        <div className="flex justify-start items-center gap-2">
          <StarIcon />
          {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
        </div>

        <CustomTypography fontSize="Body_Medium" className="text-justify ">
          در شرایط استرس‌زای این روزا، ذهن بیشتر از بدن خسته می‌شه.روزهایی که هر لحظه‌اش پر از خبر، هشدار و نگرانیه،
          لازمه که کمی از این فضا فاصله بگیری. پرت کردن حواست به معنی بی‌خیالی نیست… یه جور پناه‌بردن برای قوی موندنه.
        </CustomTypography>
      </div>

      <Movie children={children} />

      <Book children={children} />

      <Game />
    </div>
  );
};

export default Distract;
