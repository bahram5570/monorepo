import { useState } from 'react';

import Hamdel from '@assets/icons/hamdel.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import PartnerRadioButton from './PartnerRadioButton';
import useAccept from './__hooks__/useAccept';

const TypeRelationship = () => {
  const { colors } = useTheme();
  const { acceptHandler } = useAccept();
  const { getQueryParams } = useQueryParamsHandler();
  const [distanceTypeValue, setDistanceTypeValue] = useState<number>(0);

  const id = getQueryParams('id');

  const changeValueHandler = (value: number) => {
    setDistanceTypeValue(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div
          className="w-11 h-11 flex justify-center items-center rounded-full"
          style={{
            backgroundColor: colors.PrimaryWoman_PrimaryContainer,
          }}
        >
          <Hamdel className="w-6 h-6 " style={{ stroke: colors.PrimaryWoman_Primary }} />
        </div>
        <Typography scale="Title" size="Small">
          نوع رابطه
        </Typography>
        <Typography scale="Body" size="Medium" color="Surface_Outline">
          می‌تونی بعدا نوع رابطه رو در قسمت پروفایل ویرایش کنی
        </Typography>
      </div>

      <PartnerRadioButton onChange={changeValueHandler} value={distanceTypeValue} />

      <Button
        size="medium"
        variant="fill"
        color="primary"
        onClick={() => {
          acceptHandler(id, distanceTypeValue);
        }}
      >
        <Typography scale="Lable" size="Large" color="White">
          باشه
        </Typography>
      </Button>
    </div>
  );
};

export default TypeRelationship;
