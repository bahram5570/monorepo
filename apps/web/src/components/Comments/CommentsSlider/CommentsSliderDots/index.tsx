import { COLORS_LIST } from '@theme/colors';

import { CommentsSliderDotsTypes } from './types';

const CommentsSliderDots = ({ totalCount, currentIndex }: CommentsSliderDotsTypes) => {
  const list = [];
  for (let index = 0; index < totalCount; index++) {
    list.push(index);
  }

  return (
    <div className="w-full flex items-center justify-center gap-2 pt-4">
      {list.map((item) => (
        <div
          className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
          style={{
            backgroundColor: currentIndex === item ? COLORS_LIST.Surface_Outline : COLORS_LIST.Surface_OutlineVariant,
          }}
          key={item}
        />
      ))}
    </div>
  );
};

export default CommentsSliderDots;
