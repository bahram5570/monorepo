import { useState } from 'react';

import ChatbotModalMode from './ChatbotModalMode';
import ChatbotNavbarMode from './ChatbotNavbarMode';
import ClinicChatbotLayout from './ClinicChatbotLayout';
import useChatbotModalVisibility from './__hooks__/useChatbotModalVisibility';
import { ClinicChatbotTemporaryButtonPropsType } from './type';

const ClinicChatbotTemporaryButton = ({ chatbot, onChangeValueHandler }: ClinicChatbotTemporaryButtonPropsType) => {
  const { isChatbotModalVisible } = useChatbotModalVisibility();
  const [isModalVisible, setIsModalVisible] = useState(isChatbotModalVisible);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ClinicChatbotLayout
      className={isModalVisible ? '' : 'px-3'}
      handleCloseModal={handleCloseModal}
      isModalVisible={isModalVisible}
      onChangeValueHandler={onChangeValueHandler}
    >
      {isModalVisible ? (
        <ChatbotModalMode
          description={chatbot.description}
          title={chatbot.title}
          startChatText={chatbot.startChatText}
        />
      ) : (
        <ChatbotNavbarMode
          collapseText1={chatbot.collapseText1}
          collapseText2={chatbot.collapseText2}
          continueChatText={chatbot.continueChatText}
        />
      )}
    </ClinicChatbotLayout>
  );
};

export default ClinicChatbotTemporaryButton;
