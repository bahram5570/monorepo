import { HEADER_LINKS_LIST } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import usePageHeight from '../__hooks__/usePageHeight';
import MultiLinkGenerator from './MultiLinkGenerator';
import SingleLinkGenerator from './SingleLinkGenerator';
import { HeaderMobileLInksTypes } from './types';

const HeaderMobileLInks = ({ isOpen, isOpenHandler }: HeaderMobileLInksTypes) => {
  const { pageHeight } = usePageHeight();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const closeHandler = () => {
    isOpenHandler(false);
    setSelectedIndex(-1);
  };

  const selectHandler = (i: number) => {
    if (selectedIndex === i) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(i);
    }
  };

  return (
    <div
      className="w-full px-6 duration-300 overflow-hidden"
      style={{ backgroundColor: COLORS_LIST.White, height: isOpen ? pageHeight : 0 }}
    >
      {HEADER_LINKS_LIST.map((item, index) => (
        <div
          key={index}
          className="border-t-[1px]"
          style={{ borderTopColor: index > 0 ? COLORS_LIST.Surface_SurfaceVariant : COLORS_LIST.Transparent }}
        >
          {typeof item.linkTo === 'string' && (
            <SingleLinkGenerator title={item.title} linkTo={item.linkTo} closeHandler={closeHandler} />
          )}

          {typeof item.linkTo === 'object' && (
            <MultiLinkGenerator
              title={item.title}
              linkTo={item.linkTo}
              closeHandler={closeHandler}
              isSelected={selectedIndex === index}
              selectHandler={() => selectHandler(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderMobileLInks;
