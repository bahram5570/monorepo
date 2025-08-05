import { BreastfeedingSettingInputGeneratorListType } from '../type';

type BreastfeedingSettingInputGeneratorPropsType = BreastfeedingSettingInputGeneratorListType & {
  value: string | number;
  changeValueHandler: ChangeHandlerType;
};
