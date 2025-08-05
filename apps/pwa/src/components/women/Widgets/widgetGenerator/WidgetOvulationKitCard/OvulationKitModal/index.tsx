import CustomModal from '@components/ui/CustomModal';
import TestKitModalsListsDelete from '@components/women/KitTests/TestKitModalsLists/TestKitModalsListsDelete';
import TestKitModalsListsOvulation from '@components/women/KitTests/TestKitModalsLists/TestKitModalsListsOvulation';
import TestKitModalsContainer from '@components/women/pages/nestedRoutes/signs/TestKitModals/TestKitModalsContainer';
import useTestKitModalsInfo from '@components/women/pages/nestedRoutes/signs/TestKitModals/__hooks__/useTestKitModalsInfo';

import { OvulationKitModalPropsType } from './type';

const OvulationKitModal = ({ data, onDelete }: OvulationKitModalPropsType) => {
  const { modalInfo } = useTestKitModalsInfo();

  return (
    <>
      <CustomModal isSlidingMode={true} isOpen={modalInfo !== null}>
        {modalInfo && (
          <div className="h-full">
            <TestKitModalsContainer title={data.title}>
              <TestKitModalsListsOvulation data={data} />
            </TestKitModalsContainer>
          </div>
        )}
      </CustomModal>

      <TestKitModalsListsDelete onDelete={onDelete} />
    </>
  );
};

export default OvulationKitModal;
