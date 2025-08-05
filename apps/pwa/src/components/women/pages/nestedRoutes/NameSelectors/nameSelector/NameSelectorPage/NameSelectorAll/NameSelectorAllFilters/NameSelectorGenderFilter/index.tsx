import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import NameSelectorFilters from '../../../../NameSelectorFilters';
import useNameSelectorData from '../../../../__hooks__/useNameSelectorData';
import NameSelectorFilterResetBtn from '../NameSelectorFilterResetBtn';
import useNameSelectorFilterModals from '../__hooks__/useNameSelectorFilterModals';

const NameSelectorGenderFilter = () => {
  const { colors } = useTheme();
  const { data, allFilters, resetFiltersHandler } = useNameSelectorData();
  const { isOpenHandler, isOpen, isLoading } = useNameSelectorFilterModals(MODALS.NAME_SELECTOR_FILTER_GENDER);

  const selectedFilter = data?.genderFilters.find((item) => item.value === allFilters.gender);
  const btnScript = selectedFilter ? selectedFilter.title : 'جنسیت';

  return (
    <>
      <div
        onClick={isOpenHandler}
        className="relative flex items-center h-8 gap-1 border-[1px] rounded-full"
        style={{
          borderColor: colors.Neutral_Surface,
          padding: selectedFilter ? '0 16px 0 6px' : '0 16px',
          backgroundColor: selectedFilter ? colors.Surface_SurfaceVariant : colors.White,
        }}
      >
        {selectedFilter && <NameSelectorFilterResetBtn onClick={() => resetFiltersHandler('gender')} />}

        <Typography scale="Body" size="Small" style={{ opacity: isLoading ? 0 : 1 }}>
          {btnScript}
        </Typography>

        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Spinner color="onBackground" width={20} />
          </div>
        )}
      </div>

      <NameSelectorFilters isOpen={isOpen} inputType="gender" />
    </>
  );
};

export default NameSelectorGenderFilter;
