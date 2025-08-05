type BloodSugerInputGeneratorListType = {
  label: string;
  name: keyof InputValueType;
};

export type InputValueType = {
  condition: number | null;
  value: number | null;
};
