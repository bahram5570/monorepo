import CustomModal from '@components/ui/CustomModal';
import { useRouter } from 'next/navigation';

import InputModal from './InputModal';
import { ModalPropsType } from './type';

const BloodPressureModal = ({ onChange, value }: ModalPropsType) => {
  const route = useRouter();

  const onCloseModal = () => {
    route.back();
  };

  return (
    <CustomModal isSlidingMode={true}>
      <div className=" flex flex-col items-center gap-4">
        <div className="w-full flex-col flex items-center justify-between gap-2">
          <InputModal onChange={onChange} value={value} onCloseModal={onCloseModal} />
        </div>
      </div>
    </CustomModal>
  );
};

export default BloodPressureModal;
