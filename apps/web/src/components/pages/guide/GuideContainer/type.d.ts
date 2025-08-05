export type StepsContentType = {
  imageUrl: string;
  title: string;
  description: React.ReactElement;
  btnText: string;
  showTimer?: boolean;
  timer?: number;
};

export type GuideContainerPropsType = {
  stepsContent: StepsContentType[];
};

export type StepType = { name: string; value: number };
