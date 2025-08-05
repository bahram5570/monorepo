import { COLORS_LIST } from '@theme/colors';

import { useEffect, useRef, useState } from 'react';

import CrossIcon from '@assets/icons/cross.svg';
import MinusIcon from '@assets/icons/minus.svg';
import CustomTypography from '@components/ui/CustomTypography';

import { ArticleIdFaqGeneratorTypes } from './types';

const ArticleIdFaqGenerator = ({
  selectedItemHandler,
  selectedItem,
  question,
  answer,
  id,
}: ArticleIdFaqGeneratorTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const extraSpace = 8;
      setMaxHeight(el.scrollHeight + extraSpace);
    }
  }, [ref.current?.scrollHeight]);

  const isOpen = id === selectedItem;

  return (
    <div
      onClick={() => selectedItemHandler(id)}
      className="w-full px-6 py-5 rounded-xl border-[1px] cursor-pointer"
      style={{ borderColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Pink_50 }}
    >
      <div className="flex items-center gap-3">
        {isOpen && <MinusIcon className="w-3" style={{ fill: COLORS_LIST.Surface_Outline }} />}
        {!isOpen && <CrossIcon className="w-3 rotate-45" style={{ fill: COLORS_LIST.Surface_Outline }} />}
        <CustomTypography fontSize="Lable_Large">{question}</CustomTypography>
      </div>

      <div className="w-full duration-500 overflow-hidden" style={{ maxHeight: isOpen ? maxHeight : 0 }} ref={ref}>
        <CustomTypography fontSize="Body_Medium" color={'Neutral_OnBackground'} className="pt-4 pr-6">
          {answer}
        </CustomTypography>
      </div>
    </div>
  );
};

export default ArticleIdFaqGenerator;
