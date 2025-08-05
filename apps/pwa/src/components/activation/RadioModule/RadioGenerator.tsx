import { useEffect, useRef, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RadioGeneratorProps } from './types';

const RadioGenerator = ({ option, selectedItem, selectedItemHandler }: RadioGeneratorProps) => {
  const { colors } = useTheme();

  const isChecked = selectedItem === option.id;
  const radioColor = isChecked ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant;
  const borderColor = isChecked ? colors.PrimaryWoman_Primary : colors.Transparent;
  const backgroundColor = isChecked ? '#FFEBF2' : colors.Surface_SurfaceVariant;

  const ref = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState('0px');

  useEffect(() => {
    const containerHeight = ref.current?.clientHeight;
    setDescriptionHeight((containerHeight ? containerHeight + 6 : 0) + 'px');
  }, []);

  const height = option.icon ? 'initial' : `${option.description && isChecked ? descriptionHeight : 0}`;

  return (
    <div onClick={() => selectedItemHandler(option.id)}>
      <div
        style={{ borderColor, backgroundColor }}
        className="w-full h-fit p-4 rounded-xl border-[1px] flex justify-between items-center gap-1 pointer-events-none "
      >
        {option.icon && <CustomImage src={option.icon} width={84} />}

        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-end items-start gap-2">
            <Typography scale="Lable" size="Medium">
              {option.text}
            </Typography>

            <div
              style={{ borderColor: radioColor, backgroundColor: borderColor }}
              className={`relative w-5 h-5 min-w-5 min-h-5 rounded-full border-[1px]`}
            >
              {isChecked && (
                <div
                  style={{ borderColor: '#FFEBF2' }}
                  className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] border-[3px] rounded-full m-auto"
                />
              )}
            </div>
          </div>

          <div style={{ height }} className={`w-full overflow-hidden transition-all ease-in-out duration-200`}>
            <div ref={ref} className="w-full flex flex-col items-end">
              <div
                className={`w-full h-[1px] mr-7 ${option.icon ? 'my-0.5' : 'my-2'}`}
                style={{ backgroundColor: option.icon ? 'transparent' : '#FFD2E2' }}
              />

              <Typography scale="Body" size="Small" className="mr-7">
                {option.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioGenerator;
