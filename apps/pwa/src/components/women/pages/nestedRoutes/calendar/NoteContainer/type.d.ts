import { ItemType } from './__hooks__/useGetData/type';

export type NoteValueType = {
  noteId?: string;
  // reminder: boolean;
  title: string;
  text: string;
  dateTime: string;
};

export type OnchangeHandlerType = (v: string, name: keyof ItemType) => void;
