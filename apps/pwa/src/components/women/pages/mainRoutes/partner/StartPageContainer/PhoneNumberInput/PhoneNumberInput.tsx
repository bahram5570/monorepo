import { useState } from 'react';

import { toEnglishNumbers, toPersianNumbers } from '@utils/numbers';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useCreate from '../__hooks__/useCreate';

const PhoneNumberInput = () => {
  const { colors } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const { createHandler, isLoading } = useCreate();

  const changePhoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      <Typography scale="Body" size="Large" textAlign="center">
        شماره موبایل یا ایمیل پارتنرت رو اینجا بنویس تا درخواست همدلیت براش ارسال بشه
      </Typography>
      <div className="w-full">
        <input
          type="text"
          placeholder="اینجا تایپ کنید"
          className="w-full rounded-full px-4 py-3 text-right placeholder:text-right  placeholder:p-2"
          value={toPersianNumbers(phoneNumber)}
          onChange={(e) => changePhoneNumberHandler(e)}
          style={{ border: `1px solid ${colors.Neutral_Surface}` }}
        />
      </div>
      <div className="flex justify-center w-1/2 items-center">
        <Button
          size="medium"
          variant="fill"
          color="primary"
          onClick={() => createHandler(toEnglishNumbers(phoneNumber))}
          isLoading={isLoading}
          isDisable={!phoneNumber}
        >
          <Typography scale="Lable" size="Medium" color="White">
            ادامه
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default PhoneNumberInput;
