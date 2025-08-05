export type UseGetDataPropsType = {
  id: string;
};

export type ProgressPropsType = {
  visible: true;
  goldPercent: number;
  goldText: string;
  bronzePercent: number;
  bronzeText: string;
  silverPercent: number;
  silverText: string;
  currentPercent: number;
};

export type ItemPropsType = {
  id: string;
  createTime: string;
  text: string;
  replyId: string;
  side: number;
};

export type ResponsePropsType = {
  createTime: string;
  name: string;
  avatar: string;
  partnerName: string;
  partnerAvatar: string;
  text: string;
  items: ItemPropsType[];
  progress: ProgressPropsType;
};
