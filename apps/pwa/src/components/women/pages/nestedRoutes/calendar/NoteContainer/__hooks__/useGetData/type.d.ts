export type ItemType = {
  // fileName?: [];
  noteId?: string;
  // reminder: boolean;
  reminderId?: string;
  text: string;
  time: string;
  title: string;
};

export type ResponsePropsType = {
  items: ItemType[];
};
