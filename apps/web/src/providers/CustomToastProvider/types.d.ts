export type CustomToastOptionTypes = {
  numbersMode?: 'persian' | 'english';
  type: 'success' | 'error';
  duration?: number;
  message: string;
};

export type CustomToastTypes = {
  onToast: (v: CustomToastOptionTypes) => void;
};
