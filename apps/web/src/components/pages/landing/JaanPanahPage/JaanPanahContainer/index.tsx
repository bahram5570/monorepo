'use client';

import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import JaanPanahQuestions from './JaanPanahQuestions';
import QuestionContents from './JaanPanahQuestions/QuestionContents';
import useResult from './JaanPanahQuestions/__hooks__/useResult';
import JaanPanahTab from './JaanPanahTab';

const JaanPanahContainer = () => {
  const { result, resultHandler } = useResult();

  return (
    <article className="w-full flex flex-col sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto md:px-6 md:pt-6 md:pb-9">
      {!result && <JaanPanahQuestions onResult={resultHandler} />}
      {result && <JaanPanahTab result={result} />}

      <div
        className={`w-full   ${!result && ' mt-10 p-5 rounded-xl'}`}
        style={{ backgroundColor: result ? COLORS_LIST.White : COLORS_LIST.Surface_SurfaceVariant }}
      >
        {!result && <QuestionContents />}

        <div className="my-4 p-4 flex flex-col gap-2">
          <CustomTypography fontSize="Headline_Small"> همراهان جان‌پناه</CustomTypography>
          <div className="flex  gap-6 md:gap-3">
            <div
              className=" h-14 w-14 md:h-auto md:w-24 p-2 md:p-4 rounded-2xl"
              style={{ background: !result ? COLORS_LIST.White : COLORS_LIST.Surface_SurfaceVariant }}
            >
              <CustomImage
                width={100}
                height={0}
                src="/assets/images/jaanPanah/aramia.webp"
                alt="Aramia"
                sizes="90px"
                className=" "
              />
            </div>

            <div
              className=" h-14 w-14 md:h-auto md:w-24 p-2 md:p-4  rounded-2xl"
              style={{ background: !result ? COLORS_LIST.White : COLORS_LIST.Surface_SurfaceVariant }}
            >
              <CustomImage
                width={100}
                height={0}
                src="/assets/images/jaanPanah/fidibo.webp"
                alt="fidibo"
                sizes="90px"
                className=" "
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JaanPanahContainer;
