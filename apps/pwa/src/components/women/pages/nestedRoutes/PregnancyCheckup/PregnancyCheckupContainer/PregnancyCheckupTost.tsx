import { useEffect, useState } from 'react';

import CheckCircleIcon from '@assets/icons/checkCircle.svg';
import InfoIcon from '@assets/icons/info.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useCountDown from '@hooks/useCountDown';
import useTheme from '@hooks/useTheme';
import { LottieCanvas } from '@lib/LottieCanvas';

import { ResponsePropsType } from '../../CheckupQuestionContainer/QuestionCheckup/__hooks__/useSubmit/type';
import { MESSAGE_PREGNANCY_CHECKUP_RESULT } from '../constant';
import { ResultTypeEnum } from './enum';

const PregnancyCheckupToast = () => {
  const [showLottie, setShowLottie] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [resultMessage, setResultMessage] = useState<ResponsePropsType | null>(null);
  const { colors } = useTheme();

  const { startCounter: startShowMessage } = useCountDown({
    time: 5,
    onCallBack: () => {
      setShowLottie(false);
      setShowStatus(true);
      startHideToast();
    },
  });

  const { startCounter: startHideToast } = useCountDown({
    time: 7,
    onCallBack: () => {
      setShowStatus(false);
      setResultMessage(null);
    },
  });

  useEffect(() => {
    const hasResultTest = sessionStorage.getItem(MESSAGE_PREGNANCY_CHECKUP_RESULT);

    if (hasResultTest) {
      const parsedResult = JSON.parse(hasResultTest) as ResponsePropsType;
      setResultMessage(parsedResult);
      sessionStorage.removeItem(MESSAGE_PREGNANCY_CHECKUP_RESULT);

      setShowLottie(true);
      startShowMessage();
    }
  }, []);

  const renderToastMessage = () => {
    if (!resultMessage) return null;

    return (
      <div
        className={`fixed left-0 right-0 px-5 w-full mx-auto animate-signsChangedToast z-50 ${
          showStatus ? 'mt-20' : ''
        } `}
        style={{
          maxWidth: MAX_SCREEN_WIDTH,
        }}
      >
        <div
          style={{
            background:
              resultMessage.status === ResultTypeEnum.Warning
                ? colors.Warning_WarininContainer
                : colors.Success_SuccessContainer,
            border: `1px solid ${
              resultMessage.status === ResultTypeEnum.Warning ? colors.Warning_Warning : colors.Success_Success
            }`,
          }}
          className="flex justify-center items-center gap-3 rounded-lg px-4 py-2"
        >
          <div className="border-r-[1px]">
            <Typography scale="Body" size="Medium" className="px-2">
              {resultMessage.message}
            </Typography>
          </div>
          <div className="w-6 h-6">
            {resultMessage.status === ResultTypeEnum.Warning ? (
              <InfoIcon className="w-6 h-6" style={{ stroke: colors.Warning_Warning }} />
            ) : (
              <CheckCircleIcon />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {showLottie && (
        <div
          className={`fixed left-0 right-0 px-5 w-full mx-auto animate-signsChangedToast z-50 ${
            showStatus ? 'mt-20' : ''
          } `}
          style={{
            maxWidth: MAX_SCREEN_WIDTH,
          }}
        >
          <LottieCanvas src={'/assets/lottie/hasSignsChanged.lottie'} autoplay={true} />
        </div>
      )}
      {showStatus && renderToastMessage()}
    </>
  );
};

export default PregnancyCheckupToast;
