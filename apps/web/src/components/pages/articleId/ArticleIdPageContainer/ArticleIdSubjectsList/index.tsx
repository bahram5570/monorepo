'use client';

import { COLORS_LIST } from '@theme/colors';

import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow2.svg';
import CustomTypography from '@components/ui/CustomTypography';

import ArticleIdSubjectsListGenerator from './ArticleIdSubjectsListGenerator';
import { ArticleIdSubjectsListTypes } from './types';

const ArticleIdSubjectsList = ({ articleSubjectList }: ArticleIdSubjectsListTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;

    setTimeout(() => {
      if (el) {
        setMaxHeight(el.scrollHeight);
      }
    }, 1000);
  }, []);

  return (
    <div
      className="w-full h-fit px-5 py-6 md:px-14 md:py-8 rounded-2xl"
      style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
    >
      <div className="w-full flex items-center justify-between">
        <CustomTypography fontSize="Lable_Medium" color={'Primary_Primary'}>
          در این مطلب میخوانید:
        </CustomTypography>

        <div className="w-fit flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <CustomTypography fontSize="Lable_Medium" color={'Primary_Primary'}>
            {isOpen ? 'بستن' : 'باز کردن'}
          </CustomTypography>

          <ArrowIcon
            className="w-3 duration-100"
            style={{ fill: COLORS_LIST.Primary_Primary, transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
          />
        </div>
      </div>

      <div
        ref={ref}
        className="w-full h-fit flex flex-col duration-500 overflow-hidden"
        style={{ maxHeight: isOpen ? maxHeight : 0 }}
      >
        {articleSubjectList.map((item, index) => (
          <ArticleIdSubjectsListGenerator {...item} isFirstElement={index === 0} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleIdSubjectsList;
