import { useState } from 'react';

import {
  Swiper as SwiperComponent,
  SwiperProps,
  SwiperSlide as SwiperSlideComponent,
  SwiperSlideProps,
} from 'swiper/react';

import WheelPickerCellGenerator from './WheelPickerCellGenerator';
import useWheelPickerListData from './__hooks__/useWheelPickerListData';
import useWheelPickerReady from './__hooks__/useWheelPickerReady';
import { WHEEL_PICKER_CELL_HEIGHT, WHEEL_PICKER_EXTRA_CELLS, WHEEL_PICKER_TOTAL_CELLS } from './constants';
import { WheelPickerProps } from './types';

const Swiper = SwiperComponent as React.FC<SwiperProps>;
const SwiperSlide = SwiperSlideComponent as React.FC<SwiperSlideProps>;

const WheelPicker = ({ list, defaultValue, valueHandler }: WheelPickerProps) => {
  const { wheelPickerListData } = useWheelPickerListData({ list, defaultValue });
  const { ready } = useWheelPickerReady();
  const [slide, setSlide] = useState(0);

  const slideHandler = (s: number) => {
    setSlide(s);

    if (wheelPickerListData) {
      const selectedValue = wheelPickerListData.updatedList[s + WHEEL_PICKER_EXTRA_CELLS].value;
      valueHandler(selectedValue);
    }
  };

  return (
    <div className="w-full" style={{ height: WHEEL_PICKER_CELL_HEIGHT * WHEEL_PICKER_TOTAL_CELLS }}>
      {wheelPickerListData && ready && (
        <Swiper
          direction={'vertical'}
          watchSlidesProgress={true}
          slidesPerView={WHEEL_PICKER_TOTAL_CELLS}
          initialSlide={wheelPickerListData.initialSlide}
          onSlideChange={(s) => slideHandler(s.activeIndex)}
          style={{ height: WHEEL_PICKER_CELL_HEIGHT * WHEEL_PICKER_TOTAL_CELLS }}
        >
          {wheelPickerListData.updatedList.map((item, index) => {
            const currentIndex = index - WHEEL_PICKER_EXTRA_CELLS;

            const isSelectedItem = slide === currentIndex;
            const isBeforeOrAfterSelectedItem = slide === currentIndex - 1 || slide === currentIndex + 1;

            return (
              <SwiperSlide
                key={index}
                style={{ height: WHEEL_PICKER_CELL_HEIGHT }}
                className="flex items-center justify-center select-none"
              >
                <WheelPickerCellGenerator
                  title={item.title}
                  isSelectedItem={isSelectedItem}
                  resetKey={wheelPickerListData.updatedList.length}
                  isBeforeOrAfterSelectedItem={isBeforeOrAfterSelectedItem}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default WheelPicker;
