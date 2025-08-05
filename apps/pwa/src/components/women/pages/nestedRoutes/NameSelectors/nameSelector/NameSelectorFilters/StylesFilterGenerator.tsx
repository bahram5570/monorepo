import { Fragment } from 'react';

import TickIcon from '@assets/icons/selectedTick.svg';

import Typography from '@components/ui/Typography';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useTheme from '@hooks/useTheme';

import { StylesFilterGeneratorProps } from './types';

const StylesFilterGenerator = ({ value, list, onSelect }: StylesFilterGeneratorProps) => {
  useOverflowHandler();
  const { colors } = useTheme();

  const updatedList = Object.entries(list);

  return (
    <>
      {updatedList.map((mainItem, mainIndex) => {
        const mainTitle = mainItem[0];
        const items = mainItem[1].items;
        const isFirstItem = mainIndex === 0;

        return (
          <Fragment key={mainIndex}>
            {!isFirstItem && (
              <div className="w-full h-[1px] my-1" style={{ backgroundColor: colors.Neutral_Surface }} />
            )}

            <Typography scale="Lable" size="Large" color="Neutral_OnBackground" className="pb-1">
              {mainTitle}
            </Typography>

            {items.map((item, index) => {
              const isSelected = value.includes(item.value);

              return (
                <div
                  className="w-full flex items-center justify-end gap-2"
                  onClick={() => onSelect(item.value)}
                  key={index}
                >
                  <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
                    {item.title}
                  </Typography>

                  <div
                    className="relative w-4 h-4 min-w-4 min-h-4 rounded-full border-[1px] flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundColor: isSelected ? colors.PrimaryWoman_Primary : colors.Transparent,
                      borderColor: isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant,
                    }}
                  >
                    {isSelected && <TickIcon className="min-w-5 h-auto" style={{ fill: colors.White }} />}
                  </div>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </>
  );
};

export default StylesFilterGenerator;
