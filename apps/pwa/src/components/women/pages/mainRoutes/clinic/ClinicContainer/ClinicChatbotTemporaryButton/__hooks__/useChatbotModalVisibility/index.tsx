// useChatbotModalVisibility.js
import { useEffect } from 'react';

import { SHOULD_SHOW_CHATBOT_MODAL } from '../../constants';

const useChatbotModalVisibility = () => {
  const storedValue = localStorage.getItem(SHOULD_SHOW_CHATBOT_MODAL);
  const isVisible: boolean = storedValue ? JSON.parse(storedValue) : true;

  useEffect(() => {
    if (storedValue === null) {
      localStorage.setItem(SHOULD_SHOW_CHATBOT_MODAL, JSON.stringify(false));
    }
  }, []);

  return { isChatbotModalVisible: isVisible };
};

export default useChatbotModalVisibility;
