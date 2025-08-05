import { ItemPropsType, ProgressPropsType } from './__hooks__/useGetData/type';

export const initailMessageValue: ItemPropsType = {
  createTime: String(new Date().toLocaleString()),
  id: '',
  replyId: '',
  side: 0,
  text: '',
};

export const initailProgressValue: ProgressPropsType = {
  bronzePercent: 0,
  bronzeText: '',
  currentPercent: 0,
  goldPercent: 0,
  goldText: '',
  silverPercent: 0,
  silverText: '',
  visible: true,
};
