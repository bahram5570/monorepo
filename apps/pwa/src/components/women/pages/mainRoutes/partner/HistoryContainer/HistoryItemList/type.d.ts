import { ChallengeDataPropsType, ItemPropsType } from '../__hooks__/useGetData/type';

export type HistoryItemListPropsType = {
  lastExperienceRef: (node: HTMLDivElement | null) => void;
  challengeData: ChallengeDataPropsType;
};

export type HistoryItemPropsType = ItemPropsType & {};
