import { useEffect, useState } from 'react';

import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@utils/dates';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import MemoryHeader from '@components/women/pages/nestedRoutes/partner/CreateMemoryContainer/MemoryHeader';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useTheme from '@hooks/useTheme';
import moment from 'moment-jalaali';
import { useParams } from 'next/navigation';

import useGetPartnerName from '../MemoryContainer/__hooks__/useGetPartnerName';
import BtnContainer from './BtnContainer';
import Comment from './Comment';
import DeleteMemoryModal from './DeleteMemoryModal';
import MemoryDetailSkeleton from './MemoryDetailSkeleton';
import useGetData from './__hooks__/useGetData';

const MemoryDetailContainer = () => {
  const { colors } = useTheme();
  const { memoryId } = useParams();
  const { culture } = useCulture();
  const { partnerName } = useGetPartnerName();
  const [currentDate, setCurrentDate] = useState('');

  const { findCurrentMemory, isLoading } = useGetData({
    memoryId: typeof memoryId === 'string' ? memoryId : '',
  });

  const memoryImage = findCurrentMemory?.fileName || '/assets/images/partner.webp';

  useEffect(() => {
    if (findCurrentMemory) {
      const gregorianMoment = moment(findCurrentMemory.time, 'YYYY-MM-DD');

      if (culture.calendarType === CalendarTypeEnum.Gregorian) {
        const gregorianDate = gregorianMoment.format('YYYY-MM-DD');
        const gregorianFarsMonth = gregorianFarsiScriptDate(gregorianDate);

        setCurrentDate(gregorianFarsMonth);
      }

      if (culture.calendarType === CalendarTypeEnum.Jalali) {
        const jalaaliMoment = gregorianMoment.format('jYYYY/jMM/jDD');
        const jalaaliMonth = jalaaliScriptDate(jalaaliMoment);

        setCurrentDate(jalaaliMonth);
      }
    }
  }, [culture.calendarType, findCurrentMemory]);

  return (
    <>
      {isLoading && <MemoryDetailSkeleton />}
      {!isLoading && findCurrentMemory && (
        <WomenPageLayout rightElement="BackButton" rightElementScript="مرور خاطرات">
          <div className="flex flex-col relative z-0  gap-3 pb-16">
            <MemoryHeader currentDate={currentDate} />

            <div className="relative">
              <CustomImage src={memoryImage} />
              <div className="rounded-md py-1 px-4 absolute bottom-0 m-3" style={{ background: colors.Pink_50 }}>
                <Typography scale="Lable" size="Medium" color="PrimaryWoman_Primary">
                  {`ایجاد شده توسط ${findCurrentMemory.fromMan ? partnerName?.name : 'شما'}`}
                </Typography>
              </div>
            </div>

            <div className="flex flex-col justify-end items-end p-3">
              <div className="flex gap-2 items-center">
                <Typography scale="Lable" size="Large">
                  {findCurrentMemory.title}
                </Typography>
                <div className="w-2 h-2 rounded-full" style={{ background: colors.PrimaryWoman_Primary }}></div>
              </div>

              <Typography scale="Body" size="Small" textAlign="justify">
                {findCurrentMemory.text}
              </Typography>
            </div>
            
            {findCurrentMemory.textPartner && (
              <div className=" p-3">
                <Comment
                  textPartner={findCurrentMemory.textPartner}
                  fromMan={findCurrentMemory.fromMan}
                  partnerName={partnerName?.name}
                />
              </div>
            )}

            <BtnContainer
              memoryId={findCurrentMemory.id}
              fromMan={findCurrentMemory.fromMan}
              validPartner={findCurrentMemory.validPartner}
            />
          </div>

          <DeleteMemoryModal />
        </WomenPageLayout>
      )}
    </>
  );
};

export default MemoryDetailContainer;
