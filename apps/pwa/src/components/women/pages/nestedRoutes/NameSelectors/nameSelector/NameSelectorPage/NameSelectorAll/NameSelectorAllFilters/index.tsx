import Typography from '@components/ui/Typography';

import NameSelectorGenderFilter from './NameSelectorGenderFilter';
import NameSelectorStylesFilter from './NameSelectorStylesFilter';

const NameSelectorAllFilters = () => {
  return (
    <div className="w-full h-[56px] flex flex-row-reverse items-center gap-2">
      <Typography scale="Lable" size="Large" color="Neutral_OnBackground">
        فیلترها:
      </Typography>

      <NameSelectorGenderFilter />
      <NameSelectorStylesFilter />
    </div>
  );
};

export default NameSelectorAllFilters;
