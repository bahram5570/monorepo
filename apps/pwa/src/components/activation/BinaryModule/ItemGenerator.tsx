import { useEffect, useRef, useState } from 'react';

import CheckIcon from '@assets/icons/check.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ItemGeneratorProps } from './types';

const ItemGenerator = ({ option, isSelected, selectedItemHandler }: ItemGeneratorProps) => {
  const { colors } = useTheme();

  const radioColor = isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant;
  const borderColor = isSelected ? colors.PrimaryWoman_Primary : colors.Transparent;
  const backgroundColor = isSelected ? '#FFEBF2' : colors.Surface_SurfaceVariant;

  const ref = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState('0px');

  useEffect(() => {
    setDescriptionHeight((ref.current?.clientHeight || 0) + 6 + 'px');
  }, []);

  return (
    <div onClick={() => selectedItemHandler({ selectedIndex: option.index, isSingleSelect: option.isSingleSelect })}>
      <div
        style={{ borderColor, backgroundColor }}
        className="w-full h-fit p-4 rounded-xl border-[1px] pointer-events-none "
      >
        <div className="flex justify-end items-center gap-2">
          <Typography scale="Lable" size="Medium">
            {option.text}
          </Typography>

          <div
            style={{ borderColor: radioColor, backgroundColor: borderColor }}
            className={`relative w-5 h-5 min-w-5 min-h-5 rounded-full border-[1px] overflow-hidden`}
          >
            {isSelected && (
              <>
                {!option.isSingleSelect && (
                  <div className="bg-white absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px]">
                    <CheckIcon className="w-full h-auto" />
                  </div>
                )}

                {option.isSingleSelect && (
                  <div
                    style={{ borderColor: '#FFEBF2' }}
                    className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] border-[3px] rounded-full m-auto"
                  />
                )}
              </>
            )}
          </div>
        </div>

        <div
          style={{ height: `${option.description && isSelected ? descriptionHeight : 0}` }}
          className={`w-full overflow-hidden transition-all ease-in-out duration-200`}
        >
          <div ref={ref} className="w-full flex flex-col items-end">
            <div className={`w-full h-[1px] my-2 mr-7 bg-[#FFD2E2]`} />

            <Typography scale="Body" size="Small" className="mr-7">
              {option.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemGenerator;
