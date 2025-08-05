import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { EDIT_PREGNANCY_TABS_LIST } from './constants';
import { TabsTypes } from './types';

const Tabs = ({ tab, tabHandler }: TabsTypes) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-row-reverse mx-4 mt-20">
      {EDIT_PREGNANCY_TABS_LIST.map((option) => (
        <div
          onClick={() => tabHandler(option.id)}
          className="border-b-[1px] pb-2 flex justify-center w-1/2"
          style={{ borderColor: option.id === tab ? colors.PrimaryWoman_Primary : colors.Neutral_Surface }}
          key={option.id}
        >
          <Typography
            scale="Lable"
            size="Medium"
            textAlign="center"
            color={option.id === tab ? 'PrimaryWoman_Primary' : 'Surface_Outline'}
          >
            {option.text}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
