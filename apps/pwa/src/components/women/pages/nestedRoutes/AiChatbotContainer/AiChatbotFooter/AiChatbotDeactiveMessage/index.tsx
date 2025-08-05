import chatbotJson from '@assets/lottie/chatbot.json';
import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';

import { AiChatbotDeactiveMessagePropsType } from './type';

const AiChatbotDeactiveMessage = ({ deactiveMessage, title, deactiveButton }: AiChatbotDeactiveMessagePropsType) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  return (
    <div
      className="flex flex-col  relative mx-4 my-3 rounded-3xl gap-3 p-4 z-50"
      style={{
        backgroundColor: colors.Surface_Scrim,
      }}
    >
      <div className="flex flex-row-reverse ">
        <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="w-14 h-14" />

        <div className="flex flex-col justify-center items-end ">
          <Typography scale="Lable" size="Medium" color="White">
            {title}
          </Typography>
          <Typography scale="Body" size="Small" color="White">
            {deactiveMessage}
          </Typography>
        </div>
      </div>
      {deactiveButton && (
        <Button
          size="medium"
          fullWidth
          variant="fill"
          color="FREE-STYLES"
          contentsColor={colorFormatConverter(deactiveButton.foregroundColor)}
          buttonColor={colorFormatConverter(deactiveButton.backgroundColor)}
          onClick={() => {
            actionHandler(deactiveButton.action);
          }}
        >
          <Typography scale="Lable" size="Medium" color="White">
            {deactiveButton.text}
          </Typography>
        </Button>
      )}
    </div>
  );
};

export default AiChatbotDeactiveMessage;
