export type ValuesTypes = {
  lastPeriod: string;
  cycleLength: number;
  periodLength: number;
};

export type ValuesHandlerTypes = (v: { name: keyof ValuesTypes; value: string | number }) => void;
