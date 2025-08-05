import { CycleThemeEnum } from '@services/loginServices/enum';
import { colorFormatConverter } from '@utils/scripts';

import WidgetScaleModule from '@components/women/Widgets/WidgetScaleModule';
import WidgetGenerator from '@components/women/Widgets/widgetGenerator';
import WidgetCirculeCycleCard from '@components/women/Widgets/widgetGenerator/WidgetCirculeCycleCard';
import WidgetCycleCard from '@components/women/Widgets/widgetGenerator/WidgetCycleCard';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useOnMountActions from '@hooks/useOnMountActions';
import useTheme from '@hooks/useTheme';

import CycleAppBar from '../CycleAppBar';
import CycleSkeleton from './CycleSkeleton';
import useCycleLoadingStatus from './__hooks__/useCycleLoadingStatus';
import { LoadingStatusEnum } from './__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import useWidgetsListMaker from './__hooks__/useWidgetsListMaker';
import { ContainerProps } from './types';

const CycleContainer = ({ data, customAppBar, children }: ContainerProps) => {
  const { colors } = useTheme();
  const widgetsListProps = useWidgetsListMaker({ widgets: data?.wigets });
  const { loadingStatus } = useCycleLoadingStatus({ hasData: data ? true : false });

  useOnMountActions(loadingStatus === LoadingStatusEnum.successed ? data?.actions : undefined);

  const appBarBackground = data ? colorFormatConverter(data.backgroundColor) : colors.Pink_50;

  const paddingTop =
    widgetsListProps.currentCycleThemeEnum === CycleThemeEnum.Circule
      ? HEADER_HEIGHT
      : loadingStatus === LoadingStatusEnum.successed && widgetsListProps.cycleCardData === null
        ? HEADER_HEIGHT
        : 0;

  if (widgetsListProps.currentCycleThemeEnum === null) {
    return <></>;
  }

  return (
    <>
      {data && loadingStatus === LoadingStatusEnum.successed && (
        <>
          {customAppBar && <WidgetScaleModule>{customAppBar}</WidgetScaleModule>}
          {!customAppBar && <CycleAppBar date={data.date} appBarBackground={appBarBackground} />}
        </>
      )}

      <div
        className="relative h-full min-h-[100dvh] duration-300 z-0"
        style={{
          paddingTop,
          backgroundColor: appBarBackground,
        }}
      >
        <div className="flex flex-col h-full">
          {widgetsListProps.currentCycleThemeEnum === CycleThemeEnum.Flat && (
            <WidgetCycleCard
              loadingStatus={loadingStatus}
              data={widgetsListProps.cycleCardData}
              insideCycleWidgetList={widgetsListProps.insideCycleWidgetList}
            />
          )}

          {widgetsListProps.currentCycleThemeEnum === CycleThemeEnum.Circule && (
            <WidgetCirculeCycleCard
              loadingStatus={loadingStatus}
              data={widgetsListProps.circuleCycleCardData}
              insideCycleWidgetList={widgetsListProps.insideCycleWidgetList}
            />
          )}

          {widgetsListProps.outsideCycleWidgetList && loadingStatus === LoadingStatusEnum.successed && (
            <>
              <div className="flex flex-col gap-6 p-4">
                {widgetsListProps.outsideCycleWidgetList.map((widget, index) => (
                  <WidgetGenerator {...widget} key={index} />
                ))}
              </div>

              {children && <>{children}</>}
            </>
          )}
        </div>

        {loadingStatus !== LoadingStatusEnum.successed && <CycleSkeleton />}
      </div>
    </>
  );
};

export default CycleContainer;
