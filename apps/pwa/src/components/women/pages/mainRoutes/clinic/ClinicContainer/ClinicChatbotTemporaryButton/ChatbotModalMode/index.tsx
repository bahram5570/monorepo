import chatbotJson from '@assets/lottie/chatbot.json';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';
import Link from 'next/link';

import { CONTEXT_SLIDE_ONE, CONTEXT_SLIDE_TWO } from '../constants';
import LoopSlider from './LoopSlider';
import { ChatbotModalModePropsType } from './type';

const ChatbotModalMode = ({ description, title, startChatText }: ChatbotModalModePropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const isLoading = pageNavigationLoading === 'aiChatbot';

  return (
    <div className="relative w-full h-full overflow-hidden mb-4">
      <div
        className="absolute rounded-full z-0"
        style={{
          width: '322.88px',
          height: '322.88px',
          left: 'calc(50% - 322.88px / 2 - 55.57px)',
          top: '-0.14px',
          background: '#F24F7A',
          filter: 'blur(250px)',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full z-0"
        style={{
          width: '218.53px',
          height: '218.53px',
          left: 'calc(50% - 218.53px / 2 + 140.76px)',
          top: '52.03px',
          background: '#3B82F6',
          filter: 'blur(150px)',
        }}
      />

      <LottieJson
        animationData={chatbotJson}
        style={{ maxWidth: '560px' }}
        loop={true}
        className="bottom-0 w-full relative z-10"
      />
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-4 backdrop-blur-sm z-10"
        style={{
          background: 'linear-gradient(177.22deg, rgba(255, 255, 255, 0) 2.25%, rgba(255, 255, 255, 0.9) 39.81%)',
        }}
      >
        <div className="px-4 flex flex-col justify-center items-center gap-2">
          <div className=" px-4 py-2 rounded-full" style={{ backgroundColor: colors.White }}>
            <Typography scale="Title" size="Small" textAlign="center" color="Neutral_OnBackground">
              {title}
            </Typography>
          </div>

          <Typography scale="Body" size="Large" textAlign="center" color="Neutral_OnBackground">
            {description}
          </Typography>
        </div>

        <div className="flex flex-col gap-2">
          <LoopSlider items={CONTEXT_SLIDE_ONE} direction="left" />
          <LoopSlider items={CONTEXT_SLIDE_TWO} direction="right" />
        </div>

        <Link
          href="/protected/aiChatbot"
          onClick={() => pageNavigationHandler({ id: 'aiChatbot', showProgressBar: false })}
        >
          <div className="flex flex-row items-center gap-1 justify-center w-[266px] mt-auto">
            <div
              className="px-4 py-3 flex justify-center items-center rounded-full w-full"
              style={{ background: colors.PrimaryWoman_Primary }}
            >
              {isLoading ? (
                <Spinner width={24} color="FREE-STYLES" borderColor={colors.White} />
              ) : (
                <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
                  {startChatText}
                </Typography>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChatbotModalMode;
