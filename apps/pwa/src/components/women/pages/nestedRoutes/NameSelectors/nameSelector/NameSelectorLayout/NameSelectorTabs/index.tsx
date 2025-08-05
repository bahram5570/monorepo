import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useNameSelectorTabs from '../../__hooks__/useNameSelectorTabs';
import { NAME_SELECTOR_TABS_LIST } from '../constants';

const NameSelectorTabs = () => {
  const { colors } = useTheme();
  const { tab, tabHandler } = useNameSelectorTabs();

  return (
    <div
      style={{ borderBottomColor: colors.Neutral_Surface }}
      className="w-[calc(100%_-32px)] mx-auto grid grid-cols-3 border-b-[1px]"
    >
      {NAME_SELECTOR_TABS_LIST.map((item, index) => {
        const isSelected = item.tab === tab;

        const btnStyles: any = isSelected
          ? { scale: 'Lable', size: 'Large', color: 'Neutral_OnBackground' }
          : { scale: 'Body', size: 'Medium', color: 'Surface_Outline' };

        return (
          <div
            key={index}
            onClick={() => tabHandler(item.tab)}
            className="flex justify-center py-3 border-b-[1px]"
            style={{ borderBottomColor: isSelected ? colors.Neutral_OnBackground : colors.Transparent }}
          >
            <Typography {...btnStyles}>{item.title}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default NameSelectorTabs;
