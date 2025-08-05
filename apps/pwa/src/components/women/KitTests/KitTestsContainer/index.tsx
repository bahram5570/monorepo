import Typography from '@components/ui/Typography';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import KitTestBabyCheck from '../KitTestBabyCheck';
import { KitTestModuleTypeEnums } from '../enum';
import KitTestOvulation from './KitTestOvulation';
import KitTestsList from './KitTestsList';
import { kitTestMainScripts } from './constants';
import { KitTestsContainerProps } from './types';

const KitTestsContainer = (props: KitTestsContainerProps) => {
  return (
    <WidgetCardContainer title={kitTestMainScripts[props.moduleType].title}>
      <Typography scale="Body" size="Medium" className="w-full pb-2 mb-4">
        {kitTestMainScripts[props.moduleType].subTitle}
      </Typography>

      {props.moduleType === KitTestModuleTypeEnums.Ovulation && (
        <KitTestOvulation moduleType={props.moduleType} gregorianDate={props.gregorianDate} />
      )}

      {props.moduleType === KitTestModuleTypeEnums.BabyCheck && (
        <KitTestBabyCheck moduleType={props.moduleType} gregorianDate={props.gregorianDate} />
      )}

      <KitTestsList moduleType={props.moduleType} data={props.data} gregorianDate={props.gregorianDate} />
    </WidgetCardContainer>
  );
};

export default KitTestsContainer;
