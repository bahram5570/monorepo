export type ItemType = {
  fileName: [];
  noteId: string;
  reminder: boolean;
  reminderId: number;
  text: string;
  time: string;
  title: string;
};

export type ResponsePropsType = {
  items: ItemType[];
};
