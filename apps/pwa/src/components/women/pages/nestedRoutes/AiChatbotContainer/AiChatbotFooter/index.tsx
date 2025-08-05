import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotDeactiveMessage from './AiChatbotDeactiveMessage';
import AiChatbotInput from './AiChatbotInput';
import FeedBackSection from './AiChatbotInput/FeedBackSection';
import { AiChatbotFooterPropsType } from './type';

const AiChatbotFooter = (props: AiChatbotFooterPropsType) => {
  const showInput = props.valid ? true : props.isActive ? true : false;

  return (
    <div className="fixed w-full mx-auto left-0 right-0 bottom-0 z-[100]  " style={{ maxWidth: MAX_SCREEN_WIDTH }}>
      <div className="relative">
        {!showInput && (
          <AiChatbotDeactiveMessage
            deactiveMessage={props.deactiveMessage}
            title={props.title}
            deactiveButton={props.deactiveButton}
          />
        )}
        {showInput && <AiChatbotInput {...props} />}
        {props.activeRating && (
          <FeedBackSection
            activeRating={props.activeRating}
            feedbackMessage={props.feedbackMessage}
            chatId={props.chatId}
          />
        )}
      </div>
    </div>
  );
};

export default AiChatbotFooter;
