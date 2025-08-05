'use client';

import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { PERSIAN_BOY_NAME_DICTIONARY } from '../constants';

const AlphabetBtns = () => {
  const dataEntries = Object.entries(PERSIAN_BOY_NAME_DICTIONARY);

  const persianAlphabetsList = dataEntries.map((item) => ({
    label: item[1].category,
    value: item[0],
  }));

  return (
    <div className="w-full flex flex-col gap-2 md:gap-3  mx-auto px-3 pb-12">
      <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'}>
        انتخاب اسم پسر خاص و تک بر اساس حروف الفبا(همراه با ریشه و معنی)
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'}>
        اگه دنبال یه راه آسون ولی هیجان‌انگیز برای انتخاب اسم پسر کمیاب و متفاوت هستین، چرا از حروف الفبا شروع نکنین؟
        مرور اسم‌ها به ترتیب حروف، نه‌تنها کمکتون می‌کنه گزینه‌های متنوع‌تری ببینین، بلکه باعث می‌شه راحت‌تر اسمی رو
        پیدا کنین که با سلیقه‌تون جور در میاد؛ در این بخش، اسم پسر خاص و تک رو بر اساس حروف الفبا گلچین کردیم:
      </CustomTypography>

      <div
        className="w-full sm:max-w-[390px] mx-auto rounded-2xl overflow-hidden "
        style={{ backgroundColor: COLORS_LIST.Blue_200 }}
      >
        <div
          className=" rounded-b-[100%] pt-4 pb-2 text-center h-[70px]"
          style={{ background: 'linear-gradient(180deg, #FFFFFF -329.89%, #D7F0FF 100%)' }}
        >
          <CustomTypography fontSize="Title_Small" color={'Blue_800'}>
            فیلتر براساس حروف
          </CustomTypography>
        </div>
        <div className="grid grid-cols-5 gap-2 px-2 py-2">
          {persianAlphabetsList.map((item) => {
            return (
              <CustomLink
                key={item.value}
                href={`#${item.value}`}
                style={{ backgroundColor: COLORS_LIST.Neutral_Background }}
                className=" w-14 h-14 rounded-xl flex items-center justify-center"
              >
                <CustomTypography fontSize="Title_Small" color={'Blue_800'} className="!underline !underline-offset-2">
                  {item.label}
                </CustomTypography>
              </CustomLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlphabetBtns;
