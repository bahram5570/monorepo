import { COLORS_LIST } from '@theme/colors';

import { useEffect, useRef, useState } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import { TestOnlineQuestionsOptionTypes } from './types';

const TestOnlineQuestionsOption = ({ selectHandler, isSelected, title, message }: TestOnlineQuestionsOptionTypes) => {
  const [messageHeight, setMessageHeight] = useState(0);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message) {
      const el = messageRef.current;

      if (el) {
        const elMargin = 16;
        setMessageHeight(el.offsetHeight + elMargin);
      }
    }
  }, [message, messageRef.current]);

  return (
    <div
      onClick={selectHandler}
      className="w-full rounded-2xl py-4 px-6 border-[1px] cursor-pointer"
      style={{
        borderColor: isSelected ? COLORS_LIST.Primary_Primary : COLORS_LIST.Transparent,
        backgroundColor: isSelected ? COLORS_LIST.Pink_50 : COLORS_LIST.Surface_SurfaceVariant,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-[18px] h-[18px] min-w-[18px] min-h-[18px] rounded-full border-[1px] p-[2px] mt-1"
          style={{ borderColor: isSelected ? COLORS_LIST.Primary_Primary : COLORS_LIST.Surface_OutlineVariant }}
        >
          {isSelected && (
            <div className="w-full h-full rounded-full" style={{ backgroundColor: COLORS_LIST.Primary_Primary }} />
          )}
        </div>

        <CustomTypography>{title}</CustomTypography>
      </div>

      {message && (
        <div style={{ maxHeight: isSelected ? messageHeight : 0 }} className="h-fit duration-200 overflow-hidden">
          <div
            ref={messageRef}
            className="w-[calc(100%_-_30px)]  border-t-[1px] mt-4 mr-auto pt-2 "
            style={{ borderTopColor: COLORS_LIST.Pink_100 }}
          >
            <CustomTypography fontSize="Body_Small" className="text-justify">
              {message}
            </CustomTypography>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestOnlineQuestionsOption;
