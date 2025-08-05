import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import BirthDateModal from './BirthDateModal';
import CycleModal from './CycleModal';
import PeriodModal from './PeriodModal';
import { UserInfoModalNameEnums } from './enum';
import { UserInfoModalPropsType } from './type';

const UserInfoModals = ({ values, changeValueHandler }: UserInfoModalPropsType) => {
  const route = useRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const modalName = getQueryParams('name') as UserInfoModalNameEnums | null;

  const onCloseModal = () => {
    route.back();
  };

  return (
    <CustomModal isSlidingMode={true}>
      <div className=" flex flex-col items-center gap-4">
        <div className="w-full flex-col flex items-center justify-between gap-2">
          {modalName === UserInfoModalNameEnums.BirthDate && (
            <BirthDateModal
              changeValueHandler={changeValueHandler}
              name={modalName}
              value={values[modalName]}
              onCloseModal={onCloseModal}
            />
          )}

          {modalName === UserInfoModalNameEnums.CycleLength && (
            <CycleModal
              changeValueHandler={changeValueHandler}
              value={values[modalName]}
              name={modalName}
              onCloseModal={onCloseModal}
            />
          )}

          {modalName === UserInfoModalNameEnums.PeriodLength && (
            <PeriodModal
              changeValueHandler={changeValueHandler}
              totalCycleLength={values.cycleLength}
              name={modalName}
              value={values[modalName]}
              onCloseModal={onCloseModal}
            />
          )}
        </div>
      </div>
    </CustomModal>
  );
};

export default UserInfoModals;
