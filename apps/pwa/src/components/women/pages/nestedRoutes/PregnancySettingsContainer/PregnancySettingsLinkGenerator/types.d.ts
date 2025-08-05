import { PregnancySettingsListTypes, PregnancySettingsNames } from '../types';

type ItemsTypes = PregnancySettingsListTypes[0];
export interface PregnancySettingsLinkGeneratorProps extends ItemsTypes {
  selectHandler: (name: PregnancySettingsNames) => void;
}
