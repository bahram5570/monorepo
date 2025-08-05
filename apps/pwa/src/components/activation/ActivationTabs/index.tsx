import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ActivationTabsTypes } from './types';

const ActivationTabs = ({ tab, tabHandler, tabsList }: ActivationTabsTypes) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-row-reverse mx-4 mt-8">
      {tabsList.map((item) => (
        <div
          key={item.value}
          onClick={() => tabHandler(item.value)}
          className="border-b-[1px] pb-2 flex justify-center w-1/2 select-none cursor-pointer"
          style={{ borderColor: item.value === tab ? colors.PrimaryWoman_Primary : colors.Neutral_Surface }}
        >
          <Typography
            scale="Lable"
            size="Medium"
            textAlign="center"
            color={item.value === tab ? 'PrimaryWoman_Primary' : 'Surface_Outline'}
          >
            {item.text}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default ActivationTabs;
