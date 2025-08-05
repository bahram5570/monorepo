'use client';

import { useState } from 'react';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import useSubmit from './__hooks__/useSubmit';

const CommentContainer = () => {
  const [comment, setComment] = useState('');
  const { colors } = useTheme();
  const { isLoading, submitHandler } = useSubmit();
  const { getQueryParams } = useQueryParamsHandler();

  const memoryId = getQueryParams('memoryId');

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="خاطره بازی" paddingTop={0}>
      <div
        className="flex relative z-0 flex-col  gap-3 pb-6 min-h-screen px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="flex items-center w-full justify-center">
          <Typography scale="Title" size="Small" color="PrimaryWoman_Primary" textAlign="center">
            نظرت چیه؟
          </Typography>
        </div>

        <div className="flex items-center w-full justify-center">
          <Typography scale="Body" size="Medium" textAlign="center">
            حست به این خاطره چیه؟
          </Typography>
        </div>

        <textarea
          placeholder="حست به این خاطره رو اینجا بنویس"
          className="w-full text-end px-4 py-3 rounded-2xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm"
          style={{ border: `1px solid ${colors.Neutral_Surface}`, outlineColor: colors.PrimaryWoman_Primary }}
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="mt-auto">
          <Button
            size="medium"
            variant="fill"
            color="primary"
            fullWidth={true}
            className="px-6 py-2 "
            onClick={() => submitHandler({ id: memoryId, text: comment })}
            isDisable={!comment}
            isLoading={isLoading}
          >
            <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
              ثبت نظر
            </Typography>
          </Button>
        </footer>
      </div>
    </WomenPageLayout>
  );
};

export default CommentContainer;
