export type ItemType = {
  id: string;
  createTime: string;
  isRecv: true;
  name: string;
  birthdate: string;
  image: string;
};

export type RequestPartnerResponseType = {
  list: ItemType[];
};
