import { FormDataType } from './type';

export const NOTE_INPUT_LIST: FormDataType = {
  btnModal: [
    {
      label: 'تاریخ',
      description: '',
      name: 'time',
    },
    // {
    //   label: 'یادآوری',
    //   description: '(اختیاری)',
    //   name: 'reminder',
    // },
  ],
  textareaInput: [
    {
      label: 'عنوان یادداشت',
      description: '',
      name: 'title',
    },
    {
      label: 'توضیحات ',
      description: '(اختیاری)',
      name: 'text',
    },
  ],
};
