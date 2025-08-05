import { COLORS_LIST } from '@theme/colors';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import CustomTypography from '@components/ui/CustomTypography';

import { DaysModuleTypes } from './types';

const DaysModule = ({ placeholder, minValue, defaultValue, value, valueHandler }: DaysModuleTypes) => {
  const selectHandler = (isIncrement: boolean) => {
    if (value <= 0) {
      valueHandler(defaultValue);
      return;
    }

    if (isIncrement) {
      valueHandler(value + 1);
      return;
    }

    if (!isIncrement) {
      if (value <= minValue) {
        valueHandler(minValue);
        return;
      }

      valueHandler(value - 1);
    }
  };

  return (
    <div
      style={{ backgroundColor: COLORS_LIST.White }}
      className="w-full h-[56px] flex items-center justify-between px-4 rounded-xl"
    >
      <div className="w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => selectHandler(true)}>
        <AddRoundedIcon style={{ width: '24px', height: '24px', fill: COLORS_LIST.Surface_Outline }} />
      </div>

      <CustomTypography fontSize="Body_Large" color={value ? 'Neutral_OnBackground' : 'Surface_Outline'}>
        {value || placeholder}
      </CustomTypography>

      <div className="w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => selectHandler(false)}>
        <RemoveRoundedIcon style={{ width: '24px', height: '24px', fill: COLORS_LIST.Surface_Outline }} />
      </div>
    </div>
  );
};

export default DaysModule;
