import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

import { RoleEnum } from './enum';

export type ChatType = {
  role: RoleEnum;
  text: string;
  isAnswered?: boolean;
};

export type DeactiveButtonType = {
  action: ActionTypes;
  backgroundColor: string;
  foregroundColor: string;
  text: string;
};

export type HistoryChatResponsiveType = {
  emptyStateTitle: string;
  emptyStateMessage: string;
  activeRating: boolean;
  chatId: string;
  chatTitle: string;
  feedbackMessage: string;
  hintPromptText: string;
  isActive: boolean;
  deactiveMessage: string;
  title: string;
  valid?: boolean;
  deactiveButton: null | DeactiveButtonType;
  chats: ChatType[];
};
