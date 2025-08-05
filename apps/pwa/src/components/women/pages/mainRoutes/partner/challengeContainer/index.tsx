'use client';

import { useState } from 'react';

import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import useGetFormData from './__hooks__/useGetFormData';
import useSubmit from './__hooks__/useSubmit';
import ChallengeSkeleton from './challengeSkeleton';

const ChallengeContainer = () => {
  const [answerValue, setAnswerValue] = useState('');
  const { data, isLoading } = useGetFormData();
  const { submitLoading, submitHandler } = useSubmit({ id: data?.id, btn: data?.btn });
  const { colors } = useTheme();

  return (
    <>
      {isLoading && !data && <ChallengeSkeleton />}
      {!isLoading && data && (
        <WomenPageLayout rightElement="BackButton" rightElementScript="چالش روزانه" paddingTop={0}>
          <div
            className="flex relative z-0 flex-col  gap-3 pb-6 min-h-screen px-3"
            style={{ paddingTop: HEADER_HEIGHT + 16 }}
          >
            <div className="flex flex-col gap-2">
              <Typography
                scale="Title"
                size="Medium"
                color="PrimaryWoman_Primary"
                className="w-full"
                textAlign="center"
              >
                {data.date}
              </Typography>
              <Typography scale="Body" size="Large" color="Black" className="w-full" textAlign="center">
                {data.status}
              </Typography>
            </div>
            <div className="relative">
              <CustomImage src="/assets/images/bg-challenge.webp" />
              <div className="flex absolute top-0 w-full h-full justify-center items-center gap-1 flex-row-reverse">
                <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
                  {data.bannerTitle}
                </Typography>
                <Typography scale="Title" size="Small" color="Pink_800">
                  {data.bannerText}
                </Typography>
              </div>
            </div>

            <div className="flex flex-col justify-end items-end gap-2 mt-4">
              <Typography scale="Body" size="Medium">
                {data.question}
              </Typography>
              <div className="flex w-full flex-row-reverse gap-1">
                <CustomImage src={data.avatarUrl} className="w-8 h-8 rounded-full !object-cover" />
                <div className="flex w-full ">
                  <textarea
                    placeholder={data.helper}
                    className="w-full text-end px-4 py-3 rounded-xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm"
                    style={{ background: colors.Surface_SurfaceVariant, outlineColor: colors.PrimaryWoman_Primary }}
                    value={answerValue}
                    maxLength={500}
                    onChange={(e) => setAnswerValue(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <footer className="mt-auto">
              <Button
                size="medium"
                variant="fill"
                color="primary"
                fullWidth={true}
                className="px-6 py-2 "
                onClick={() => submitHandler({ questionText: data.question, text: answerValue })}
                isDisable={!answerValue}
                isLoading={submitLoading}
              >
                <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
                  {data.btn.text}
                </Typography>
              </Button>
            </footer>
          </div>
        </WomenPageLayout>
      )}
    </>
  );
};

export default ChallengeContainer;
