import { SelectNameGenderEnum } from '@services/selectNameServices/enums';
import { FetchSelectNameActivationTypes } from '@services/selectNameServices/types';

export interface NameSelectorActivationLayoutTypes {
  children: React.ReactNode;
}

export interface NameSelectorActivationProviderTypes {
  children: React.ReactNode;
  initialData: FetchSelectNameActivationTypes;
}

export type NameSelectorActivatioPayloadTypes = {
  styles: [string];
  charFilter: string;
  gender: SelectNameGenderEnum;
};

export type NameSelectorActivatioPayloadHandlerTypes = (v: {
  name: keyof NameSelectorActivatioPayloadTypes;
  value: SelectNameGenderEnum | string | [string];
}) => void;

export interface NameSelectorActivatioContextTypes {
  payload: NameSelectorActivatioPayloadTypes;
  data: FetchSelectNameActivationTypes | null;
  payloadHandler: NameSelectorActivatioPayloadHandlerTypes;
}
