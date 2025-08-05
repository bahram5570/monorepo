import { COLORS_LIST } from '@theme/colors';

import { useEffect, useRef, useState } from 'react';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { HEADER_MULTI_LINK } from '../../types';

const MultiLinkGenerator = ({ linkTo, title }: HEADER_MULTI_LINK) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const enterHandler = () => setIsOpen(true);
      const leaveHandler = () => setIsOpen(false);

      el.addEventListener('mouseenter', enterHandler);
      el.addEventListener('mouseleave', leaveHandler);

      return () => {
        el.removeEventListener('mouseenter', enterHandler);
        el.removeEventListener('mouseleave', leaveHandler);
      };
    }
  }, []);

  return (
    <div className="relative cursor-pointer hover:!text-[#F24F7A]" ref={ref}>
      <CustomTypography fontSize="Body_Medium" className="!text-inherit duration-200">
        {title}
      </CustomTypography>

      <div
        style={{ maxHeight: isOpen ? 'none' : '0px' }}
        className="absolute top-0 -right-10 w-fit min-w-[180px] pt-6 overflow-hidden"
      >
        <div
          className="w-full flex flex-col gap-1 px-2 py-3 border-[1px] rounded-xl"
          style={{ borderColor: COLORS_LIST.Neutral_Surface, backgroundColor: COLORS_LIST.White }}
        >
          {linkTo.map((item, index) => (
            <div key={index} className="w-full h-9 flex items-center">
              <CustomLink href={item.linkTo} className="!w-full hover:opacity-100">
                <CustomTypography
                  fontSize="Body_Medium"
                  className="hover:!text-[#F24F7A] hover:bg-[#F7F7F7] whitespace-nowrap px-2 py-2 rounded-md duration-200"
                >
                  {item.title}
                </CustomTypography>
              </CustomLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiLinkGenerator;
