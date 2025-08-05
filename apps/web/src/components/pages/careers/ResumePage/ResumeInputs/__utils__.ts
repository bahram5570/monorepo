import { toEnglishNumbers } from './../../../../../utils/numbers';
import { ResumeValuesTypes } from './__hooks__/useValues/types';

export const resumePayloadValidator = (values: ResumeValuesTypes) => {
  let errorMessage: null | string = null;
  const updatedValues: ResumeValuesTypes = {
    name: values.name,
    jobId: values.jobId,
    file: values.file.trim(),
    email: toEnglishNumbers(values.email.trim()),
    phone: toEnglishNumbers(values.phone.trim()),
  };

  if (updatedValues.name.length === 0) {
    errorMessage = 'نامت رو وارد کن';
  } else if (updatedValues.name.length < 2) {
    errorMessage = 'نام باید حداقل دو کاراکتر داشته باشه';
  } else if (updatedValues.email.length === 0) {
    errorMessage = 'ایمیل رو وارد کن';
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(updatedValues.email)) {
    errorMessage = 'ایمیل اشتباهه';
  } else if (updatedValues.phone.length === 0) {
    errorMessage = 'شماره تلفن رو وارد کن';
  } else if (!/^[0-9]+$/.test(updatedValues.phone)) {
    errorMessage = 'شماره همراه اشتباهه';
  } else if (!/^09/.test(updatedValues.phone)) {
    errorMessage = 'شماره همراه باید با 09 شروع بشه';
  } else if (!/^.{11}$/.test(updatedValues.phone)) {
    errorMessage = 'شماره همراه باید 11 رقمی باشه';
  } else if (updatedValues.file.length === 0) {
    errorMessage = 'فایل رزومه رو وارد کن';
  }

  return { errorMessage, updatedValues };
};
