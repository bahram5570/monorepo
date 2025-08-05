import { useEffect, useState } from 'react';

import Typography from '@components/ui/Typography';
import PartnerRadioButton from '@components/women/pages/mainRoutes/partner/PartnerContainer/PartnerModals/PartnerRadioButton';
import useTheme from '@hooks/useTheme';

import useChangeType from './__hooks__/useChangeType';
import { TypeRelationshipPropsType } from './type';

const TypeRelationship = ({ distanceType }: TypeRelationshipPropsType) => {
  const { colors } = useTheme();
  const { changeTypeHandler } = useChangeType();
  const [distanceTypeValue, setDistanceTypeValue] = useState<number>(distanceType);

  const changeValueHandler = (value: number) => {
    setDistanceTypeValue(value);
  };

  useEffect(() => {
    changeTypeHandler(distanceTypeValue);
  }, [distanceTypeValue]);

  return (
    <div className="p-4 rounded-xl" style={{ background: colors.White }}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-end">
          <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
            نوع رابطه
          </Typography>
        </div>

        <PartnerRadioButton onChange={changeValueHandler} value={distanceTypeValue} />
      </div>
    </div>
  );
};

export default TypeRelationship;
