import { InfoListTypes, InitialSelectedSignsTypes } from '../../../__hooks__/useGetData/types';

export type SelectedSignsHandlerTypes = (category: number, sign: number) => void;

type InfoTypes = {
  initialSelectedSigns: InitialSelectedSignsTypes;
  gregorianDate: string;
};
export interface CategoryGeneratorProps {
  selectHandler?: SelectedSignsHandlerTypes;
  category: number;
  info: InfoTypes;
  title: string;
  signs: {
    [x: number]: {
      title: string;
    };
  };
}
