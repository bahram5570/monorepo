export interface DateModuleProps {
  testIds?: { year: string; month: string; day: string };
  valueHandler: (v: string) => void;
  defaultDate?: string;
  startDate?: string;
  endDate?: string;
}

export type ValuesTypes = { year: string; month: string; day: string };

export type StateValuesHandlerTypes = (v: string, name: string) => void;
