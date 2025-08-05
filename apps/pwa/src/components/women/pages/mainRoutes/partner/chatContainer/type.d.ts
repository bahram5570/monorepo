import { ItemPropsType, ResponsePropsType } from './__hooks__/useGetData/type';

export type ChatHeaderPropsType = Pick<
  ResponsePropsType,
  'partnerName' | 'partnerAvatar' | 'createTime' | 'progress' | 'avatar'
>;

export type InputPropsType = {
  submitHandler: ({ text }: { text: string }) => void;
  onChange: (v: ItemPropsType) => void;
};
