export type ValuesHandlerTypes = (v: { name: 'rate' | 'rateDescription'; value: string | number }) => void;

export type RateModalPropsType = {
  rateDescription: string;
  rate: number;
};

export type RateValuesType = { rate: number; rateDescription: string };
