import ArrowIcon from '@assets/icons/arrow.svg';
import chatbotJson from '@assets/lottie/chatbot.json';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT, ICONS_SIZE } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import { AiChatbotHeaderPropsType } from './type';

const AiChatbotHeader = ({ chatTitle }: AiChatbotHeaderPropsType) => {
  const { colors } = useTheme();

  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const id = `AiChatbotHeaderRouteBack`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
    }
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 mx-auto flex z-40`}
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: HEADER_HEIGHT }}
    >
      <div className="flex items-end w-full backdrop-blur-md" style={{ height: HEADER_HEIGHT }}>
        <div className="flex px-4 py-2 w-full justify-end gap-2 items-center">
          <Typography scale="Lable" size="Large" color="Neutral_OnBackground">
            {chatTitle}
          </Typography>

          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} />
          </div>

          <div
            className="cursor-pointer flex justify-center items-center"
            style={{ width: ICONS_SIZE, height: ICONS_SIZE }}
            onClick={clickHandler}
          >
            {pageNavigationLoading === id && <Spinner color="outline" width={28} />}
            {pageNavigationLoading !== id && (
              <ArrowIcon className="w-6 h-full stroke-2" style={{ stroke: colors.Surface_Outline }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiChatbotHeader;
