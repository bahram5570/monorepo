import { useRef } from 'react';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import useIsLargeScreenHeight from '@hooks/__activation__/useIsLargeScreenHeight';

import WidgetGenerator from '..';
import Btn from './Btn';
import CycleScripts from './CycleScripts';
import Waves from './Waves';
import { WidgetCycleCardProps } from './types';

const WidgetCycleCard = ({ data, insideCycleWidgetList, loadingStatus }: WidgetCycleCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isLargeScreen } = useIsLargeScreenHeight();

  const containerTotalHeight = isLargeScreen ? 550 : 400;
  const scriptsTotalHeight = isLargeScreen ? 180 : 130;

  if (loadingStatus === LoadingStatusEnum.successed && data === null) {
    return <></>;
  }

  return (
    <>
      <div
        ref={ref}
        className="relative flex flex-col justify-between h-full pb-8"
        style={{ minHeight: containerTotalHeight, paddingTop: HEADER_HEIGHT }}
      >
        {loadingStatus === LoadingStatusEnum.successed && (
          <>
            <div>
              {insideCycleWidgetList && (
                <div className="flex flex-col gap-4 p-4">
                  {insideCycleWidgetList.map((item, index) => (
                    <WidgetGenerator {...item} key={index} />
                  ))}
                </div>
              )}

              {data && (
                <CycleScripts
                  description={data.description}
                  height={scriptsTotalHeight}
                  textColor={data.textColor}
                  leading={data.leading}
                  title={data.title}
                />
              )}
            </div>

            {data?.button && <Btn buttonsList={data.button} />}
          </>
        )}

        <Waves
          backgroundColour={data?.backgroundColour}
          forgroundColor={data?.forgroundColor}
          loadingStatus={loadingStatus}
        />
      </div>
    </>
  );
};

export default WidgetCycleCard;
