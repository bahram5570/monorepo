import KitTestsContainer from './KitTestsContainer';
import { KitTestModuleTypeEnums } from './enum';
import { KitTestsProps } from './types';

const KitTests = ({ data, gregorianDate, hasOvulationKit }: KitTestsProps) => {
  return (
    <>
      {hasOvulationKit && (
        <KitTestsContainer data={data} gregorianDate={gregorianDate} moduleType={KitTestModuleTypeEnums.Ovulation} />
      )}

      <KitTestsContainer data={data} gregorianDate={gregorianDate} moduleType={KitTestModuleTypeEnums.BabyCheck} />
    </>
  );
};

export default KitTests;
