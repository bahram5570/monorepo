import Message from './Message';
import { MessageListContainerPropsType } from './type';

const MessageListContainer = ({ messageList, partnerAvatar }: MessageListContainerPropsType) => {
  return (
    <div>
      {messageList
        .sort((a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime())
        .map((item) => (
          <div key={item.id}>
            <Message {...item} partnerAvatar={partnerAvatar} />
          </div>
        ))}
    </div>
  );
};

export default MessageListContainer;
