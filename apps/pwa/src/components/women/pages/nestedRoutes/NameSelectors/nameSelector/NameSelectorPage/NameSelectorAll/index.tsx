import NameSelectorAllArranged from './NameSelectorAllArranged';
import NameSelectorAllFilters from './NameSelectorAllFilters';

const NameSelectorAll = () => {
  return (
    <div className="px-4">
      <NameSelectorAllFilters />
      <NameSelectorAllArranged />
    </div>
  );
};

export default NameSelectorAll;
