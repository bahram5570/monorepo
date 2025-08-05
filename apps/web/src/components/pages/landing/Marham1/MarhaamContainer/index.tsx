'use client';

import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomModal from '@components/ui/CustomModal';
import CustomTypography from '@components/ui/CustomTypography';

import MarhaamQuestion from './MarhaamQuestion';
import QuestionContents from './MarhaamQuestion/QuestionContents';
import useResult from './MarhaamQuestion/__hooks__/useResult';
import MarhaamTab from './MarhaamTab';

const MarhaamContainer = () => {
  const { result, resultHandler } = useResult();
  const [isOpen, setIsOpen] = useState(true);

  const isOpenHandler = (b: boolean) => {
    setIsOpen(b);
  };

  return (
    <article className="w-full flex flex-col sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto md:px-6 md:pt-6 md:pb-9">
      {!result && <MarhaamQuestion onResult={resultHandler} />}
      {result && <MarhaamTab result={result} />}

      <div
        className={`w-full   ${!result && ' mt-10 p-5 rounded-xl'}`}
        style={{ backgroundColor: result ? COLORS_LIST.White : COLORS_LIST.Surface_SurfaceVariant }}
      >
        {!result && <QuestionContents />}

        <div className={`my-4 ${result && 'px-4'} flex flex-col gap-2`}>
          <CustomTypography fontSize="Headline_Small"> همراهان مرهم</CustomTypography>
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

            <div
              className=" h-14 w-14 md:h-auto md:w-24 p-2 md:p-4  rounded-2xl"
              style={{ background: !result ? COLORS_LIST.White : COLORS_LIST.Surface_SurfaceVariant }}
            >
              <CustomImage
                width={100}
                height={0}
                src="/assets/images/jaanPanah/impoLogo.webp"
                alt="impo"
                sizes="90px"
                className="mt-2 "
              />
            </div>
          </div>
        </div>
      </div>

      <CustomModal position={'center'} isOpen={isOpen} onClose={() => isOpenHandler(false)}>
        <div
          className="w-[100vw] max-w-[320px] flex flex-col items-center p-6 md:p-10 rounded-2xl"
          style={{ backgroundColor: COLORS_LIST.White }}
        >
          <CustomTypography className="text-center" fontSize="Title_Small">
            مهلت استفاده از خدمات مرهم به پایان رسید
          </CustomTypography>

          <CustomButton varient="fill" className="!w-full !mt-2" onClick={() => isOpenHandler(false)}>
            فهمیدم
          </CustomButton>
        </div>
      </CustomModal>
    </article>
  );
};

export default MarhaamContainer;
