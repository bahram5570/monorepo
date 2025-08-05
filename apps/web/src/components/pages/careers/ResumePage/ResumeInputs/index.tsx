'use client';

import useCustomToast from '@hooks/useCustomToast';
import useFileUpload from '@hooks/useFileUpload';
import { COLORS_LIST } from '@theme/colors';

import UploadIcon from '@assets/icons/upload.svg';
import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';
import Spinner from '@components/ui/Spinner';
import { textShorter } from '@utils/scripts';

import useSubmitHandler from './__hooks__/useSubmitHandler';
import useValues from './__hooks__/useValues';
import { resumePayloadValidator } from './__utils__';
import { ResumeInputsTypes } from './types';

const ResumeInputs = ({ jobId }: ResumeInputsTypes) => {
  const { onToast } = useCustomToast();
  const { values, valuesHandler } = useValues();
  const { submitHandler, isLoading } = useSubmitHandler();

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    api: 'resume/file',
    onSuccess: (value) => {
      valuesHandler('file', value);
    },
  });

  const validateHandler = () => {
    const { errorMessage, updatedValues } = resumePayloadValidator(values);

    if (errorMessage) {
      onToast({ type: 'error', message: errorMessage });
      return;
    }

    submitHandler({ ...updatedValues, jobId });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <CustomInput
          className="border-[1px] rounded-xl px-4 py-3 outline-gray-300"
          style={{ borderColor: COLORS_LIST.Neutral_Surface }}
          placeholder="نام و نام خانوادگی"
          value={values.name}
          hasOutline={true}
          onValue={(v) => valuesHandler('name', v)}
        />

        <CustomInput
          className="border-[1px] rounded-xl px-4 py-3 outline-gray-300"
          style={{ borderColor: COLORS_LIST.Neutral_Surface }}
          placeholder="آدرس ایمیل"
          value={values.email}
          hasOutline={true}
          numbersMode="english"
          onValue={(v) => valuesHandler('email', v)}
        />

        <CustomInput
          className="border-[1px] rounded-xl px-4 py-3 outline-gray-300"
          style={{ borderColor: COLORS_LIST.Neutral_Surface }}
          placeholder="شماره همراه"
          value={values.phone}
          hasOutline={true}
          onValue={(v) => valuesHandler('phone', v)}
        />

        <div className="w-full flex items-center gap-2">
          <div
            className="relative w-[190px] h-12 flex items-center justify-center gap-2 rounded-xl"
            style={{ backgroundColor: COLORS_LIST.Neutral_Surface }}
          >
            <input
              type="file"
              onChange={(e) => fileDataHandler({ e })}
              className="absolute top-0 left-0 right-0 bottom-0 opacity-0 z-10"
            />

            {uploadImageLoading && <Spinner />}

            {!uploadImageLoading && (
              <>
                <UploadIcon className="w-5 h-auto" style={{ stroke: COLORS_LIST.Black }} />
                <CustomTypography fontSize="Title_Small" color={'Neutral_OnSurface'}>
                  آپلود فایل رزومه
                </CustomTypography>
              </>
            )}
          </div>

          {values.file && (
            <CustomTypography fontSize="Body_Small" numbersMode="english" style={{ direction: 'ltr' }}>
              {textShorter(values.file)}
            </CustomTypography>
          )}
        </div>
      </div>

      <div className="w-full h-[1px] mt-4 mb-6 md:my-8" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />

      <CustomButton
        varient="fill"
        isLoading={isLoading}
        fontSize="Lable_Large"
        onClick={validateHandler}
        className="w-full md:w-[230px] !py-[10px] md:!py-[12px]"
      >
        درخواست همکاری
      </CustomButton>
    </div>
  );
};

export default ResumeInputs;
