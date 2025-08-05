import { ClinicStateEnums } from '../../../enumbs';
import { SideTypeEnum } from './enums';

export type ChatsTypes = {
  text: string;
  dateTime: string;
  media: string | null;
  sideType: SideTypeEnum;
};

export type FeedbacksTypes = {
  positive: string[];
  negative: string[];
};

export type ChatResponseTypes = {
  rate: number;
  drName: string;
  drRate: string;
  drImage: string;
  isRate: boolean;
  drValid: boolean;
  description: string;
  chats: ChatsTypes[];
  drSpeciality: string;
  state: ClinicStateEnums;
  feedbacks: FeedbacksTypes;
  feedbackPositive: string[];
  feedbackNegative: string[];
  acadimicCertificate: string;
};
