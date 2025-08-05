import Typography from '@components/ui/Typography';
import useSignIcon from '@components/women/SignGenerator/__hooks__/useSignIcon';
import { ICONS_WIDTH, SIGNS_LIST } from '@components/women/SignGenerator/constants';
import useTheme from '@hooks/useTheme';

import { WidgetMostRepeatedSignsListProps } from './types';

const WidgetMostRepeatedSignsList = ({ items, isPdfDownloading }: WidgetMostRepeatedSignsListProps) => {
  const { colors } = useTheme();

  return (
    <div
      style={{ direction: 'rtl' }}
      className={`w-full grid gap-6 pt-4 ${isPdfDownloading ? 'grid-cols-8' : 'grid-cols-4'}`}
    >
      {items.map((item, index) => {
        const { icon } = useSignIcon({ category: item.category, sign: item.sign });
        const title = SIGNS_LIST?.[item.category]?.signs?.[item.sign]?.title || '';

        return (
          <div className="w-full h-full flex flex-col items-center gap-2" key={index}>
            <div
              className="relative flex items-center justify-center rounded-full border-[1px]"
              style={{
                width: ICONS_WIDTH,
                height: ICONS_WIDTH,
                minWidth: ICONS_WIDTH,
                minHeight: ICONS_WIDTH,
                borderColor: colors.Neutral_Surface,
              }}
            >
              <>{icon}</>

              <div
                className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.PrimaryWoman_Primary }}
              >
                <Typography scale="Lable" size="SmallProminet" color="White">
                  {item.count.toString()}
                </Typography>
              </div>
            </div>

            <Typography scale="Body" size="Small" color="Neutral_OnBackground">
              {title}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default WidgetMostRepeatedSignsList;
