import CustomSlider from '@components/ui/CustomSlider';
import useOperatingSystem from '@hooks/useOperatingSystem';

import FilterGenerator from './FilterGenerator';
import useArrangeList from './__hooks__/useArrangeList';
import { NameSelectorActivationFiltersProps } from './types';

const NameSelectorActivationFilters = ({ items, onSelect, currentValue }: NameSelectorActivationFiltersProps) => {
  const { arrangedList } = useArrangeList(items);
  const { operatingSystem } = useOperatingSystem();

  const sliderGap = operatingSystem === 'windows' ? '20px' : '12px';

  return (
    <div className="-mx-3 flex flex-col gap-3" style={{ direction: 'ltr', gap: sliderGap }}>
      {arrangedList.map((row, rowIndex) => (
        <CustomSlider sidePadding={16} key={rowIndex}>
          {row.map((filter, filterIndex) => (
            <FilterGenerator
              key={filterIndex}
              title={filter.title}
              subtitle={filter.subtitle}
              onClick={() => onSelect(filter.value)}
              isSelected={currentValue === filter.value}
            />
          ))}
        </CustomSlider>
      ))}
    </div>
  );
};

export default NameSelectorActivationFilters;
