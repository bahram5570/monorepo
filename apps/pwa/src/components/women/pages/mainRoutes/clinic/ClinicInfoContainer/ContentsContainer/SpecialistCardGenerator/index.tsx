import ClockIcon from '@assets/icons/clock1.svg';
import PeopleIcon from '@assets/icons/people.svg';
import StarIcon from '@assets/icons/star.svg';

import Button from '@components/ui/Button';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { usePathname } from 'next/navigation';

import { CLINIC_DOCTOR_MODAL_QUERY_NAME } from '../../../ClinicDoctorModal/constants';
import SpecialistInfoGenerator from '../SpecialistInfoGenerator';
import SpecialistCardSectionMaker from './SpecialistCardSectionMaker';
import { SpecialistCardGeneratorProps } from './types';

const SpecialistCardGenerator = ({
  selectedDoctorHandler,
  hasCommentsButton,
  nezamNumber,
  selectedId,
  speciliaty,
  firstName,
  lastName,
  isOnline,
  minTime,
  rrCount,
  image,
  rate,
  id,
}: SpecialistCardGeneratorProps) => {
  const { colors } = useTheme();
  const pathname = usePathname();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    if (!hasCommentsButton) {
      selectedDoctorHandler(id);
    }
  };

  const selectDoctorHandler = () => {
    const pathnameList = pathname.split('/');
    const clinicInfo = pathnameList[pathnameList.length - 1];

    pageNavigationHandler({ id, showProgressBar: false });
    newQueryParamsHandler({ [CLINIC_DOCTOR_MODAL_QUERY_NAME]: JSON.stringify({ drId: id, clinicInfo }) });
  };

  const isSelected = selectedId === id;

  return (
    <div
      style={{ backgroundColor: isSelected ? colors.Blue_100 : colors.Surface_SurfaceVariant }}
      className="w-full p-2 rounded-xl "
      onClick={selectHandler}
    >
      <SpecialistInfoGenerator
        backgroundColor={isSelected ? colors.White : colors.Surface_SurfaceVariant}
        nezamNumber={nezamNumber}
        speciliaty={speciliaty}
        firstName={firstName}
        lastName={lastName}
        isOnline={isOnline}
        image={image}
      />

      <div className="w-full h-[1px] my-1" style={{ backgroundColor: colors.Blue_100 }} />

      <div className="flex justify-between items-center px-2">
        <SpecialistCardSectionMaker
          isSelectedColor={colors.Surface_OnSurfaceVariant}
          notSelectedColor={colors.Surface_Outline}
          value={rrCount.toString()}
          title="تعداد مشاوره ها"
          isSelected={isSelected}
          Icon={PeopleIcon}
        />

        <div className="w-[1px] h-10 mx-1" style={{ backgroundColor: colors.Blue_100 }} />

        <SpecialistCardSectionMaker
          isSelectedColor={colors.Surface_OnSurfaceVariant}
          notSelectedColor={colors.Surface_Outline}
          title="میانگین امتیازات"
          isSelected={isSelected}
          Icon={StarIcon}
          value={rate}
        />

        <div className="w-[1px] h-10 mx-1" style={{ backgroundColor: colors.Blue_100 }} />

        <SpecialistCardSectionMaker
          isSelectedColor={colors.Surface_OnSurfaceVariant}
          notSelectedColor={colors.Surface_Outline}
          title="میانگین پاسخگویی"
          isSelected={isSelected}
          Icon={ClockIcon}
          value={minTime}
        />
      </div>

      {hasCommentsButton && (
        <Button
          contentsColor={colors.Neutral_OnSurface}
          onClick={selectDoctorHandler}
          className="rounded-lg my-2"
          buttonColor={colors.White}
          navigationLoadingId={id}
          color="FREE-STYLES"
          variant="fill"
          size="small"
        >
          نظرات کاربران
        </Button>
      )}
    </div>
  );
};

export default SpecialistCardGenerator;
