'use client';

import { COLORS_LIST } from '@theme/colors';

import { useEffect, useRef, useState } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import { QuestionOptionGeneratorTypes } from './types';

const QuestionOptionGenerator = ({ title, isSelected, onClick, description }: QuestionOptionGeneratorTypes) => {
  const radioColor = isSelected ? COLORS_LIST.Primary_Primary : COLORS_LIST.Surface_SurfaceVariant;
  const borderColor = isSelected ? COLORS_LIST.Primary_Primary : COLORS_LIST.Transparent;
  const backgroundColor = isSelected ? '#FFEBF2' : COLORS_LIST.Surface_SurfaceVariant;

  const ref = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState('0px');

  useEffect(() => {
    setDescriptionHeight((ref.current?.clientHeight || 0) + 6 + 'px');
  }, []);

  return (
    <div onClick={onClick} className="w-full h rounded-xl flex items-center gap-4  cursor-pointer">
      <div
        style={{ borderColor, backgroundColor }}
        className="w-full h-fit p-4 rounded-xl border-[1px] pointer-events-none "
      >
        <div className="flex justify-start items-center gap-2">
          <div
            style={{ borderColor: radioColor, backgroundColor: borderColor }}
            className={`relative w-5 h-5 min-w-5 min-h-5 rounded-full border-[1px] overflow-hidden`}
          >
            {isSelected && (
              <>
                <div
                  style={{ borderColor: '#FFEBF2' }}
                  className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] border-[3px] rounded-full m-auto"
                />
              </>
            )}
          </div>
          <CustomTypography fontSize="Lable_Medium"> {title}</CustomTypography>
        </div>

        <div
          style={{ height: `${description && isSelected ? descriptionHeight : 0}` }}
          className={`w-full overflow-hidden transition-all ease-in-out duration-200`}
        >
          <div ref={ref} className="w-full flex flex-col ">
            <div className={`w-full h-[1px] my-2 mr-7 bg-[#FFD2E2]`} />
            <CustomTypography fontSize="Body_Small"> {description}</CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionOptionGenerator;
