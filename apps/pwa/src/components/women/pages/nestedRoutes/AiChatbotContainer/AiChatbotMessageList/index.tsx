import { useEffect, useRef, useState } from 'react';

import { parseFormattedText } from '../utils';
import LoadingIcon from '@assets/icons/loading.svg';
import chatbotJson from '@assets/lottie/chatbot.json';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import WordFadeInText from '../WordFadeInText';
import { RoleEnum } from '../__hooks__/useGetHistoryChatData/enum';
import { AiChatbotMessageListPropsType } from './type';

const AiChatbotMessageList = ({ chats, isLoading }: AiChatbotMessageListPropsType) => {
  const { colors, typography } = useTheme();
  const lastItemRef = useRef<HTMLDivElement>(null);

  const [lastItemHeight, setLastItemHeight] = useState<string | undefined>(undefined);

  useEffect(() => {
    const calculatedHeight = `calc(100dvh - 290px)`;
    setLastItemHeight(calculatedHeight);

    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return () => {
      setLastItemHeight(undefined);
    };
  }, [chats, isLoading]);

  return (
    <div className="flex flex-col gap-4 " style={{ marginBottom: '200px', paddingTop: HEADER_HEIGHT }}>
      {chats.map((chat, index) => {
        const formattedLine = parseFormattedText(chat.text);

        return (
          <div
            key={index}
            style={{ minHeight: index === chats.length - 1 && !isLoading ? lastItemHeight : 'auto' }}
            ref={index === chats.length - 1 ? lastItemRef : null}
          >
            <div
              className={`flex ${chat.role === RoleEnum.User ? 'justify-start' : 'justify-end'} items-center ml-3 mx-auto`}
            >
              {chat.isAnswered ? (
                <WordFadeInText text={chat.text} />
              ) : (
                <p
                  className="rounded-full px-4 py-2 z-30"
                  style={{
                    background: chat.role === RoleEnum.User ? colors.Surface_SurfaceVariant : 'transparent',
                    direction: 'rtl',
                    ...typography.Body.Large,
                  }}
                  dangerouslySetInnerHTML={{ __html: formattedLine.replace(/\n/g, '<br/>') + '&nbsp;' }}
                />
              )}
            </div>
          </div>
        );
      })}
      {isLoading && (
        <div ref={lastItemRef} style={{ minHeight: `calc(100dvh - 360px )` }}>
          <div className="flex justify-end items-center ml-3">
            {/* <LoadingIcon /> */}

            <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="w-14 h-14" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChatbotMessageList;
