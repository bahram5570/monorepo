import CancelIcon from '@assets/icons/cancel.svg';

import CustomModal from '@components/ui/CustomModal';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { BioType, TextBioType } from '../../../__hooks__/useCalendarGetData/types';
import { BIORHYTHM_STATUS } from '../constant';
import { BiorhythmModalPropsType } from './type';

const BiorhythmModal = ({ biorhythmInfo }: BiorhythmModalPropsType) => {
  const { colors } = useTheme();
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const biorhythmText = biorhythmInfo.data.texts;
  const biorhythmPercent = biorhythmInfo.data.bio;

  const typeBiothythmText = getQueryParams('typeText') as keyof TextBioType | null;
  const typeBiothythmType = getQueryParams('type') as keyof BioType | null;

  const findCurrentText = typeBiothythmText ? biorhythmText[typeBiothythmText] : '';
  const findCurrentPercent = typeBiothythmType && biorhythmPercent ? biorhythmPercent[typeBiothythmType] : '';

  const findStatus = BIORHYTHM_STATUS.find((status) => status.type === typeBiothythmType);
  const Icon = findStatus?.Icon;

  const onCloseHandler = () => {
    router.back();
  };

  return (
    <CustomModal isSlidingMode>
      <div className="flex flex-col gap-3">
        <div
          onClick={onCloseHandler}
          className="w-10 h-10  flex justify-center items-center rounded-full"
          style={{
            backgroundColor: colors.Blue_50,
          }}
        >
          <CancelIcon className="w-6 h-auto" />
        </div>
        <div className="flex flex-col p-4 rounded-2xl gap-3" style={{ background: colors.Surface_SurfaceVariant }}>
          <div className="flex flex-col justify-center items-center gap-2 p-1">
            {Icon && <Icon className="w-16 h-16" />}

            <div className="flex flex-row-reverse gap-1 items-center">
              <Typography scale="Title" size="Small">
                {` بیوریتم ${findStatus?.text}: %${findCurrentPercent}`}
              </Typography>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end px-1">
            <div
              className="flex flex-col justify-end items-end w-full  border-b-[1px] pb-2 "
              style={{ borderColor: '#D6DEE9' }}
            >
              <Typography scale="Lable" size="Large" color="Neutral_OnBackground">
                توصیه امروز
              </Typography>
            </div>
            <div className="py-2">
              <Typography scale="Body" size="Medium">
                {findCurrentText}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default BiorhythmModal;
