import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import ConditionModal from './ConditionModal';
import ValueModal from './ValueModal';
import { BloodSugerNameEnums } from './enum';
import { ModalPropsType } from './type';

const BloodSugerModal = ({ onChange, value }: ModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();

  const route = useRouter();

  const modalName = getQueryParams('name') as BloodSugerNameEnums | null;

  const onCloseModal = () => {
    route.back();
  };

  return (
    <CustomModal isSlidingMode={true}>
      <div className=" flex flex-col items-center gap-4">
        <div className="w-full flex-col flex items-center justify-between gap-2">
          {modalName === BloodSugerNameEnums.Condition && (
            <ConditionModal onChange={onChange} name={modalName} value={value.condition} onCloseModal={onCloseModal} />
          )}
          {modalName === BloodSugerNameEnums.Value && (
            <ValueModal onChange={onChange} value={value.value} name={modalName} onCloseModal={onCloseModal} />
          )}
        </div>
      </div>
    </CustomModal>
  );
};

export default BloodSugerModal;
