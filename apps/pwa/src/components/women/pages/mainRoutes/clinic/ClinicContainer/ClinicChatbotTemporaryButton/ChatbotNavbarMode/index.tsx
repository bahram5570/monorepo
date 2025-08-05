import chatbotJson from '@assets/lottie/chatbot.json';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';
import Link from 'next/link';

import TypingLoop from './TypingLoop';
import { ChatbotNavbarModePropsType } from './type';

const ChatbotNavbarMode = ({ collapseText1, collapseText2, continueChatText }: ChatbotNavbarModePropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const isLoading = pageNavigationLoading === 'aiChatbot';
  return (
    <div
      className="relative w-full h-full  rounded-[100px] flex flex-row-reverse gap-2  items-center p-2 mt-4"
      style={{ background: 'linear-gradient(to right, #FFB7C9, #B5D3FF)' }}
    >
      <div>
        <div className="w-12 h-12 bg-white rounded-full ">
          <LottieJson animationData={chatbotJson} loop={true} />
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-row-reverse gap-2 w-full justify-between">
          <TypingLoop collapseText1={collapseText1} collapseText2={collapseText2} />
        </div>
      </div>

      <div className="w-full flex ">
        <Link
          href="/protected/aiChatbot"
          onClick={() => pageNavigationHandler({ id: `aiChatbot`, showProgressBar: false })}
        >
          <div className="flex flex-row items-center gap-1 justify-center w-[112px] h-[30px] mt-auto">
            <div
              className="px-4 py-2 flex justify-center items-center rounded-full w-full"
              style={{ background: colors.PrimaryWoman_Primary }}
            >
              {isLoading ? (
                <Spinner width={24} color="FREE-STYLES" borderColor={colors.White} />
              ) : (
                <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
                  {continueChatText}
                </Typography>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChatbotNavbarMode;
