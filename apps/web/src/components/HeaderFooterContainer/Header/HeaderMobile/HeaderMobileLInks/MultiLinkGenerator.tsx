import { COLORS_LIST } from '@theme/colors';

import ArrowIcon from '@assets/icons/arrow2.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { MultiLinkGeneratorTypes } from './types';

const MultiLinkGenerator = ({ linkTo, title, isSelected, closeHandler, selectHandler }: MultiLinkGeneratorTypes) => {
  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-between h-14" onClick={selectHandler}>
        <CustomTypography
          fontSize="Body_Medium"
          color={'Surface_InverseSurface'}
          className={`${isSelected && '!text-[#F24F7A]'} duration-200`}
        >
          {title}
        </CustomTypography>

        <ArrowIcon
          style={{ fill: COLORS_LIST.Surface_Outline }}
          className={`w-4 h-auto ${isSelected ? 'rotate-180' : '-rotate-90'}`}
        />
      </div>

      <div className={`w-full flex flex-col gap-4 px-4 overflow-hidden ${isSelected ? 'max-h-fit pb-4' : 'max-h-0'}`}>
        {linkTo.map((item, index) => (
          <CustomLink href={item.linkTo} className="hover:!opacity-100" onClick={closeHandler} key={index}>
            <CustomTypography fontSize="Body_Medium" color={'Surface_InverseSurface'}>
              {item.title}
            </CustomTypography>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default MultiLinkGenerator;
