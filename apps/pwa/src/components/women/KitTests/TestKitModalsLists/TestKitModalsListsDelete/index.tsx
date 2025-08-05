import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Loading from '@components/ui/Loading';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useRouter } from 'next/navigation';

import { KitTestModuleTypeEnums } from '../../enum';
import { DeleteModalDataTypes } from '../__hooks__/useTestKitsDeleteModal/types';
import useTestKitDelete from './__hooks__/useTestKitDelete';
import { TestKitModalsListsDeleteProps } from './types';

const TestKitModalsListsDelete = ({ onDelete }: TestKitModalsListsDeleteProps) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const deleteQuery = getQueryParams(MODALS.TEST_KITS_LIST_DELETE);
  const deleleData = deleteQuery === null ? null : (JSON.parse(deleteQuery) as DeleteModalDataTypes);
  const isOvulationOpen = deleleData?.moduleType === KitTestModuleTypeEnums.Ovulation;
  const isBabyCheckOpen = deleleData?.moduleType === KitTestModuleTypeEnums.BabyCheck;

  const { isLoading, testKitDeleteHandler } = useTestKitDelete({
    onDelete,
    isDeleteModalOpen: isOvulationOpen || isBabyCheckOpen,
  });

  const deleteHandler = () => {
    if (deleleData) {
      testKitDeleteHandler(deleleData);
    }
  };

  return (
    <>
      <CustomModal isOpen={isOvulationOpen} className="!w-[calc(100%_-_32px)] flex items-center">
        <div className="w-full flex flex-col items-center gap-6">
          <Typography scale="Lable" size="Large">
            تست تخمک گذاری مورد نظر حذف شود؟
          </Typography>

          <div className="w-full flex justify-between gap-4">
            <Button variant="fill" color="primary" size="medium" onClick={deleteHandler}>
              بله
            </Button>

            <Button variant="fill" color="surface" size="medium" onClick={() => router.back()}>
              خیر
            </Button>
          </div>
        </div>
      </CustomModal>

      <CustomModal isOpen={isBabyCheckOpen} className="!w-[calc(100%_-_32px)] flex items-center">
        <div className="w-full flex flex-col items-center gap-6">
          <Typography scale="Lable" size="Large">
            تست بارداری مورد نظر حذف شود؟
          </Typography>

          <div className="w-full flex justify-between gap-4">
            <Button variant="fill" color="primary" size="medium" onClick={deleteHandler}>
              بله
            </Button>

            <Button variant="fill" color="surface" size="medium" onClick={() => router.back()}>
              خیر
            </Button>
          </div>
        </div>
      </CustomModal>

      {isLoading && <Loading />}
    </>
  );
};

export default TestKitModalsListsDelete;
