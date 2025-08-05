export type InputValueType = {
  text: string;
  title: string;
  time: string;
  fileName: string;
};

export type TextareaInputPropsType = {
  value: InputValueType;
  onchange: (v: string, name: string) => void;
};

export type UploadInputPropsType = {
  valuesHandler: (v: string, name: string) => void;
  uploadImageLoading: boolean;
  fileName: string;
};
