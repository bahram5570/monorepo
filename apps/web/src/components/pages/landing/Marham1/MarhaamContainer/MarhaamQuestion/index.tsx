import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import WarningIcon from '@assets/icons/warningCircle.svg';
import ProgressCycleLoading from '@components/ProgressCycleLoading';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import { MARHAAM_QUESTIONS_LIST } from '../../constants';
import { MarhaamFeelingEnum } from '../../enum';
import QuestionOptionGenerator from './QuestionOptionGenerator';
import { JaanPanahQuestionsTypes } from './types';

const MarhaamQuestion = ({ onResult }: JaanPanahQuestionsTypes) => {
  const { breakPoint } = useBreakPoint();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingBeginBtn, setIsShowingBeginBtn] = useState(true);
  const [values, setValues] = useState<MarhaamFeelingEnum>();

  const valuesHandler = (value: MarhaamFeelingEnum) => {
    setValues(value);
  };

  const curentData = MARHAAM_QUESTIONS_LIST.feeling;

  const btnScript = isShowingBeginBtn ? 'شروع کن ' : 'ثبت اطلاعات';

  const clickHandler = () => {
    if (!isShowingBeginBtn) {
      setIsLoading(true);
    } else {
      setIsShowingBeginBtn(false);
    }
  };

  const completeHandler = () => {
    if (values) {
      onResult(values);
    }
  };

  return (
    <>
      <div
        className="w-full min-w-[360px] flex flex-col mx-auto px-4"
        style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
      >
        <div className="relative w-full  flex flex-col items-center">
          <div
            className="flex flex-row justify-center items-center gap-1 rounded-xl px-6 py-3 mb-4"
            style={{
              backgroundColor: COLORS_LIST.Warning_WarininContainer,
              border: `1px solid${COLORS_LIST.Warning_Warning}`,
            }}
          >
            <WarningIcon />

            <CustomTypography fontSize="Lable_Large" color={'Warning_OnWarininContainer'}>
              مهلت استفاده از خدمات مرهم به پایان رسید
            </CustomTypography>
          </div>
          {isLoading && (
            <div
              style={{ backgroundColor: COLORS_LIST.White }}
              className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center z-10"
            >
              <CustomTypography
                className="text-center pb-16"
                fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Small'}
              >
                تا ساخته شدن محتوای متناسب با اطلاعاتی که وارد کردی، چند لحظه صبر کن...
              </CustomTypography>

              <ProgressCycleLoading onComplete={completeHandler} />
            </div>
          )}

          {isShowingBeginBtn && (
            <CustomTypography fontSize="Title_Small" className="text-center px-4">
              شاید جنگ تموم شده باشه،اما ذهن و جان، هنوز آروم نگرفتن. اینجا تو مرهم،با چند قدم ساده، کمک می‌کنیم تا ذهنت
              رو از اخبار و حال بد گردگیری کنی و «خودمراقبتی» و «شفقت با خود» رو دوباره به یاد بیاری.
            </CustomTypography>
          )}

          {!isShowingBeginBtn && (
            <>
              <CustomTypography
                fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Small'}
                className="text-center pb-14"
              >
                {curentData.mainTitle}
              </CustomTypography>

              {curentData.type === 'option' && (
                <div className="w-full flex flex-col gap-3">
                  {curentData.list.map((item, index) => (
                    <QuestionOptionGenerator
                      key={index}
                      title={item.title}
                      isSelected={values === item.value}
                      onClick={() => valuesHandler(item.value)}
                      description={item.description}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          <CustomButton
            varient="fill"
            // isDisable={values === undefined && !isShowingBeginBtn}
            isDisable
            onClick={clickHandler}
            className="!mt-8"
          >
            {btnScript}
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default MarhaamQuestion;
