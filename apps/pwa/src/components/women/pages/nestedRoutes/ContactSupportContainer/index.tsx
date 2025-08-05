'use client';

import { useState } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useProfileData from '@hooks/__profile__/useProfileData';
import useTheme from '@hooks/useTheme';

import FileInput from './FileInput';
import { ValuesHandlerTypes } from './FileInput/type';
import SupportChatModal from './SupportChatModal';
import SupportChatSkeleton from './SupportChatSkeleton';
import useSubmit from './__hooks__/useSubmit';

const SupportChatContainer = () => {
  const { colors, typography } = useTheme();
  const { isLoading, profileData } = useProfileData();
  const [values, setValues] = useState({ text: '', fileName: '' });
  const { isLoading: submitLoading, submitHandler } = useSubmit();

  const valuesHandler: ValuesHandlerTypes = (v) => {
    setValues({ ...values, [v.name]: v.value });
  };

  return (
    <>
      <WomenPageLayout
        paddingTop={0}
        rightElement="BackButton"
        backgroundColor={colors.Grey_50}
        rightElementScript="ارتباط با پشتیبانی"
      >
        {isLoading && <SupportChatSkeleton />}

        {!isLoading && (
          <div className="flex flex-col items-end gap-3 min-h-[100dvh] p-4" style={{ paddingTop: HEADER_HEIGHT + 20 }}>
            <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
              ارتباط با پشتیبانی
            </Typography>

            {profileData && (
              <>
                <div className="w-full p-4 rounded-2xl " style={{ background: colors.White }}>
                  <textarea
                    rows={4}
                    value={toPersianNumbers(values.text)}
                    style={{ ...typography.Body.Medium, direction: 'rtl' }}
                    onChange={(e) => valuesHandler({ name: 'text', value: e.target.value })}
                    className="w-full max-h-[100px] rounded-xl text-right p-2 resize-none outline-none"
                    placeholder={`${profileData?.name} ، سوال یا مشکلت رو اینجا بنویس تا پشتیبان‌های ایمپودر اولین فرصت بهت پاسخ بدن.`}
                  />

                  <FileInput fileName={values.fileName} valuesHandler={valuesHandler} />
                </div>

                <Button
                  size="medium"
                  variant="fill"
                  color="primary"
                  className="mt-auto"
                  isDisable={!values.text}
                  isLoading={submitLoading}
                  onClick={() => submitHandler({ fileName: values.fileName, text: values.text })}
                >
                  ثبت نظر
                </Button>
              </>
            )}
          </div>
        )}

        <SupportChatModal valuesHandler={valuesHandler} />
      </WomenPageLayout>
    </>
  );
};

export default SupportChatContainer;
