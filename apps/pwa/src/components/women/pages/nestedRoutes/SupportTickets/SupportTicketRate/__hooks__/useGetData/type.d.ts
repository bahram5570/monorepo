export type ItemType = {
  createTime: string;
  id?: string;
  sendByUser: boolean;
  text: string;
  fileName: string;
};

export type ChatResponseTypes = {
  text: string;
  title: string;
  createTime: string;
  status: number;
  categoryName: string;
  id: string;
  isRate: boolean;
  rate: number;
  rateDescription: string;
  items: ItemType[];
};
