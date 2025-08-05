import { BloodSugerInputGeneratorListType } from './type';

export const BLOOD_SUGER_INPUT_GENERATOR_LIST: BloodSugerInputGeneratorListType[] = [
  {
    label: 'زمان اندازه گیری',
    name: 'condition',
  },
  {
    label: 'میزان قند خون ',
    name: 'value',
  },
];

export const initailValue = {
  condition: null,
  value: null,
  date: 'string',
};
