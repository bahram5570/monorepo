export type OptionsTypes = {
  id: number;
  text: string;
  icon?: string;
  description?: string;
}[];

type QuestionTypes = {
  type: 'Question';
  id: number;
  page: {
    title: string;
    subtitle: string;
    description: string;
    options: OptionsTypes;
  };
};
type RewardTypes = {
  type: 'Reward';
  id: number;
  page: {
    title: string;
    image: string;
    enable: boolean;
    btnLabel: string;
    doRepeat: boolean;
    btnLabel2?: string;
    gradient: string[];
    description: string;
  };
};

export type ActivationResponseTypes = {
  items: (QuestionTypes | RewardTypes)[];
};

export type ActivationDataTypes = {
  question: { [key: number]: QuestionTypes };
  reward: { [key in number]: RewardTypes };
};

export type ActivationQuestionsDataTypes = {
  questionsData: ActivationDataTypes;
  errorCode: null | number;
};
