import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import WidgetPeriodReportCardCandleGenerator from './WidgetPeriodReportCardCandleGenerator';
import WidgetPeriodReportCardLines from './WidgetPeriodReportCardLines';
import { WidgetPeriodReportCardTableProps } from './types';

const WidgetPeriodReportCardTable = ({
  periodLength,
  cycleLength,
  items,
  min,
  max,
}: WidgetPeriodReportCardTableProps) => {
  const rangesHeigth = (max - min) * 3.5;
  const rangeExtraSpace = 20;
  const numbersWidth = 30;
  const datesHeight = 40;

  return (
    <div className="relative w-full flex mt-6" style={{ height: rangesHeigth + datesHeight + rangeExtraSpace }}>
      <WidgetPeriodReportCardLines
        rangeExtraSpace={rangeExtraSpace}
        periodLength={periodLength}
        rangesHeigth={rangesHeigth}
        numbersWidth={numbersWidth}
        cycleLength={cycleLength}
        min={min}
        max={max}
      />

      <div style={{ paddingBottom: datesHeight }} className="relative w-full h-full overflow-y-hidden ml-[4px]">
        <div className="relative w-full h-full" style={{ paddingTop: rangeExtraSpace }}>
          <Swiper
            loop={false}
            autoplay={false}
            modules={[Autoplay]}
            slidesPerView={'auto'}
            className="w-full h-full min-h-[calc(100%_+_48px)] pb-[28px] pt-[20px] px-4 -translate-y-5"
          >
            {items.map((item, index) => (
              <SwiperSlide className="relative w-fit px-5" key={index}>
                <WidgetPeriodReportCardCandleGenerator
                  periodLength={item.periodLength}
                  cycleLength={item.cycleLength}
                  start={item.start}
                  min={min}
                  max={max}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WidgetPeriodReportCardTable;
