import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ShareExperenceTabsPropsType } from './type';

const ShareExperienceTabs = ({ options, tab, tabHandler }: ShareExperenceTabsPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-row-reverse mx-4 mt-8">
      {options.map((option) => (
        <div
          onClick={() => tabHandler(option.id)}
          className="border-b-[1px] pb-2 flex justify-center w-1/2 select-none cursor-pointer"
          style={{ borderColor: option.id === tab ? colors.Neutral_OnBackground : colors.Neutral_Surface }}
          key={option.id}
        >
          {option.id === tab ? (
            <Typography scale="Lable" size="Large" textAlign="center" color="Neutral_OnBackground">
              {option.text}
            </Typography>
          ) : (
            <Typography scale="Body" size="Medium" textAlign="center" color="Surface_Outline">
              {option.text}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShareExperienceTabs;
