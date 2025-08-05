export type OptionTypes = {
  type?: 'normal' | 'success' | 'error';
  englishNumbers?: boolean;
  duration?: number;
  message: string;
  icon?: 'info';
};

export type ToastTypes = {
  onToast: (v: OptionTypes) => void;
};
