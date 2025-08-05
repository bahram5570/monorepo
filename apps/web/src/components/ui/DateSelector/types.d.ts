export type DateFormatType = `${string}/${string}/${string}`;

export interface DateSelectorProps {
  testIds?: { year: string; month: string; day: string };
  valueHandler: (v: string) => void;
  defaultDate?: DateFormatType;
  startDate?: DateFormatType;
  endDate?: DateFormatType;
}

export type ValuesTypes = { year: string; month: string; day: string };

export type StateValuesHandlerTypes = (v: string, name: string) => void;
