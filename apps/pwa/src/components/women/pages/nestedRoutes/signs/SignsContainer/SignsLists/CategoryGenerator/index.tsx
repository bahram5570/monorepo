import SignGenerator from '@components/women/SignGenerator';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import useSelectedSigns from './__hooks__/useSelectedSigns';
import { CategoryGeneratorProps, SelectedSignsHandlerTypes } from './types';

const CategoryGenerator = ({ category, title, signs, info, selectHandler }: CategoryGeneratorProps) => {
  const { selectedSigns, selectedSignsHandler } = useSelectedSigns(info.initialSelectedSigns);

  const selectSignHandler: SelectedSignsHandlerTypes = (ca, si) => {
    selectedSignsHandler(ca, si);

    if (selectHandler) {
      selectHandler(ca, si);
    }
  };

  const list = Object.entries(signs);

  return (
    <WidgetCardContainer title={title}>
      <div className="grid grid-cols-4 gap-4" style={{ direction: 'rtl' }}>
        {list.map((item, index) => {
          const key = `WidgetCardContainer-${index}`;

          const sign = Number(item[0]);
          const initialIsSelected = selectedSigns.some((s) => s.category === category && s.sign === sign);

          return (
            <SignGenerator
              key={key}
              sign={sign}
              category={category}
              selectedDate={info.gregorianDate}
              initialIsSelected={initialIsSelected}
              onSelect={() => selectSignHandler(category, sign)}
            />
          );
        })}
      </div>
    </WidgetCardContainer>
  );
};

export default CategoryGenerator;
