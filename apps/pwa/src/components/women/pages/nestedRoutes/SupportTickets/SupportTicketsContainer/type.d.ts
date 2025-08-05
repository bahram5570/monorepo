export type ItemType = {
  id: string;
  title: string;
};

export type TicketcategoryResponseType = {
  items: ItemType[];
  id: string;
  url: string;
  describtion: string;
  title: string;
  tickets: ticketItem[];
};

export type ticketItem = {
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
