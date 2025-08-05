'use client';

import { useState } from 'react';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useCalendarDateFormat from '@components/women/pages/mainRoutes/partner/__hooks__/useCalendarDateFormat';
import useFileUpload from '@hooks/useFileUpload';
import moment from 'moment-jalaali';
import { useRouter } from 'next/navigation';

import MemoryHeader from './MemoryHeader';
import TextareaInput from './TextareaInput';
import UploadInput from './UploadInput';
import UploadModal from './UploadModal';
import useSubmit from './__hooks__/useSubmit';
import { initialValue } from './constants';
import { InputValueType } from './type';

const CreateMemoryContainer = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<InputValueType>(initialValue);
  const { createMemoryHandler, isLoading } = useSubmit();
  const gregorianMoment = moment(new Date().toISOString(), 'YYYY-MM-DD');
  const { currentDate } = useCalendarDateFormat({ date: gregorianMoment.format('YYYY-MM-DD') });

  const onChangeHandler = (v: string, name: string) => {
    setInputValue({ ...inputValue, [name]: v });
  };

  const successHandler = (v: string) => {
    onChangeHandler(v, 'fileName');
    router.back();
  };

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v) => successHandler(v),
  });

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="ثبت خاطره" paddingTop={0}>
      <div
        className="flex relative z-0 flex-col  gap-3 pb-6 min-h-screen px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="flex items-center w-full justify-center">
          <Typography scale="Title" size="Small" color="PrimaryWoman_Primary" textAlign="center">
            ایجاد خاطره جدید
          </Typography>
        </div>

        <MemoryHeader currentDate={`امروز ${currentDate} `} />

        <UploadInput
          fileName={inputValue.fileName}
          valuesHandler={onChangeHandler}
          uploadImageLoading={uploadImageLoading}
        />
        <TextareaInput onchange={onChangeHandler} value={inputValue} />

        <footer className="mt-auto">
          <Button
            size="medium"
            variant="fill"
            color="primary"
            fullWidth={true}
            className="px-6 py-2 "
            onClick={() => createMemoryHandler(inputValue)}
            isDisable={!inputValue.title}
            isLoading={isLoading}
          >
            <Typography scale="Title" size="Small" color="PrimaryMan_OnPrimaryMan">
              ثبت خاطره
            </Typography>
          </Button>
        </footer>
      </div>
      <UploadModal fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
    </WomenPageLayout>
  );
};

export default CreateMemoryContainer;
