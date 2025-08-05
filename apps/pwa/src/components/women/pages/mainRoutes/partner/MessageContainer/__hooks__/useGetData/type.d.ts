export type MessageType = {
  messageId: string;
  text: string;
  fileName: string;
  createTime: string;
  readFlag: boolean;
  fromMan: boolean;
};

export type MessageResponseType = {
  messages: MessageType[];
};
