import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { SelectDatesTableProps } from './types';

const SelectDatesTable = ({
  selectDatesBottomText,
  selectDatesBottomIcon,
  selectDatesTopText,
  selectDatesTopIcon,
  isPregnancy,
}: SelectDatesTableProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full rounded-xl select-none overflow-hidden"
      style={{ backgroundColor: colors.Neutral_Background }}
    >
      <div className="w-full flex justify-between px-4 py-5">
        {selectDatesTopIcon}

        <Typography scale="Body" size="Large" color="Surface_Outline">
          {selectDatesTopText}
        </Typography>
      </div>

      <div className="relative w-full h-[1px]" style={{ backgroundColor: colors.Neutral_Surface }}>
        {isPregnancy && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Typography
              size="Small"
              scale="Title"
              className="px-2"
              style={{ backgroundColor: colors.Neutral_Background }}
            >
              یا
            </Typography>
          </div>
        )}
      </div>

      <div className="w-full flex justify-between px-4 py-5">
        {selectDatesBottomIcon}

        <Typography scale="Body" size="Large" color="Surface_Outline">
          {selectDatesBottomText}
        </Typography>
      </div>
    </div>
  );
};

export default SelectDatesTable;
