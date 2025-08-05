import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';

import WheelPickerCellGenerator from './WheelPickerCellGenerator';
import useWheelPickerListData from './__hooks__/useWheelPickerListData';
import { WHEEL_PICKER_CELL_HEIGHT, WHEEL_PICKER_EXTRA_CELLS, WHEEL_PICKER_TOTAL_CELLS } from './constants';
import { WheelPickerProps } from './types';

const WheelPicker = ({ list, defaultValue, valueHandler }: WheelPickerProps) => {
  const { wheelPickerListData } = useWheelPickerListData({ list, defaultValue });
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
      {wheelPickerListData && (
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
                style={{ height: WHEEL_PICKER_CELL_HEIGHT }}
                key={index + wheelPickerListData.updatedList.length}
                className="flex items-center justify-center select-none"
              >
                <WheelPickerCellGenerator
                  title={item.title}
                  isSelectedItem={isSelectedItem}
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
