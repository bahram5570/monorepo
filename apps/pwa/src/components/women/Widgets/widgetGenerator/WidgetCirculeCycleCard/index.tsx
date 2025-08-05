import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';

import WidgetGenerator from '..';
import CircleContainer from './CircleContainer';
import { WidgetCirculeCycleCardProps } from './types';

const WidgetCirculeCycleCard = ({ data, insideCycleWidgetList, loadingStatus }: WidgetCirculeCycleCardProps) => {
  return (
    <div className="relative flex flex-col justify-between h-full">
      {loadingStatus === LoadingStatusEnum.successed && (
        <div>
          {insideCycleWidgetList && (
            <div className="flex flex-col gap-4 p-4">
              {insideCycleWidgetList.map((item, index) => (
                <WidgetGenerator {...item} key={index} />
              ))}
            </div>
          )}
        </div>
      )}

      <CircleContainer data={data} loadingStatus={loadingStatus} />
    </div>
  );
};

export default WidgetCirculeCycleCard;
