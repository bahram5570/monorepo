import CustomModal from '@components/ui/CustomModal';
import TestKitModalsListsBabyCheck from '@components/women/KitTests/TestKitModalsLists/TestKitModalsListsBabyCheck';
import TestKitModalsListsDelete from '@components/women/KitTests/TestKitModalsLists/TestKitModalsListsDelete';
import TestKitModalsBabyCheck from '@components/women/pages/nestedRoutes/signs/TestKitModals/TestKitModalsBabyCheck';
import TestKitModalsContainer from '@components/women/pages/nestedRoutes/signs/TestKitModals/TestKitModalsContainer';
import useTestKitModalsInfo from '@components/women/pages/nestedRoutes/signs/TestKitModals/__hooks__/useTestKitModalsInfo';

import { TestBabyKitModalsPropsType } from './type';

const TestBabyKitModalsLists = ({ onAdd, onDelete, data }: TestBabyKitModalsPropsType) => {
  const { modalInfo } = useTestKitModalsInfo();

  return (
    <>
      <CustomModal isSlidingMode={true} isOpen={modalInfo !== null}>
        <>
          {modalInfo && (
            <div className="h-full">
              {modalInfo.type === 'lists' && (
                <TestKitModalsContainer title={data.title}>
                  <TestKitModalsListsBabyCheck data={data.items} />
                </TestKitModalsContainer>
              )}

              {modalInfo.type === 'babyCheckSelectors' && (
                <TestKitModalsBabyCheck
                  onComplete={onAdd}
                  moduleType={modalInfo.moduleType}
                  babyCheckType={modalInfo.babyCheckType}
                  gregorianDate={modalInfo.gregorianDate}
                />
              )}
            </div>
          )}
        </>
      </CustomModal>

      <TestKitModalsListsDelete onDelete={(v) => onDelete(v.index)} />
    </>
  );
};

export default TestBabyKitModalsLists;
