export type ItemType = {
  text: string;
  title: string;
  categoryName: string;
  createTime: string;
  id: string;
  status: number;
  lastFromUser: true;
  statusText: string;
  statusColor: string;
};

export type ResponsePropsType = {
  totalCount: number;
  items: ItemType[];
};
