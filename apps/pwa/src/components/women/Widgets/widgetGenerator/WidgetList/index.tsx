import useTheme from '@hooks/useTheme';

import WidgetGenerator from '..';
import WidgetCardContainer from '../../WidgetCardContainer';
import { WidgetListProps } from './types';

const WidgetList = ({ data }: WidgetListProps) => {
  const { colors } = useTheme();
  const hasOOneWidget = data.widgetList.length === 1;
  return (
    <>
      <WidgetCardContainer title=" برنامه های امروز تو">
        <div className="overflow-x-auto overflow-y-hidden  max-w-full flex flex-row-reverse gap-3">
          {data.widgetList.map((item, index) => (
            <div className="flex flex-row w-full" key={index}>
              <div
                className={`rounded-2xl p-4 ${hasOOneWidget ? 'w-full' : 'w-80'}`}
                style={{ backgroundColor: colors.Surface_SurfaceVariant }}
              >
                <WidgetGenerator {...item} />
              </div>
            </div>
          ))}
        </div>
      </WidgetCardContainer>
    </>
  );
};

export default WidgetList;
