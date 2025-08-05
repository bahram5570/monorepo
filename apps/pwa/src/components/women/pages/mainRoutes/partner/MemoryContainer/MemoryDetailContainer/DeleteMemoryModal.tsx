import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import useDelete from './__hooks__/useDelete';

const DeleteMemoryModal = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { deleteHandler, isLoading } = useDelete();
  const { getQueryParams } = useQueryParamsHandler();

  const memoryId = getQueryParams('memoryId');

  return (
    <CustomModal>
      <div className="w-[290px] flex flex-col items-center gap-4">
        <Typography scale="Title" size="Small">
          حذف خاطره
        </Typography>
        <Typography scale="Body" size="Medium">
          می‌خوای این خاطره رو حذف کنی؟
        </Typography>

        <div className="w-full flex items-center justify-between gap-2">
          <Button
            size="medium"
            variant="outline"
            color="FREE-STYLES"
            onClick={() => deleteHandler({ id: memoryId })}
            contentsColor={colors.Error_Error}
            buttonColor={colors.Error_ErrorContainer}
            style={{ backgroundColor: colors.Error_ErrorContainer }}
            isLoading={isLoading}
          >
            حذف
          </Button>

          <Button variant="fill" size="medium" color="surface" onClick={() => router.back()}>
            خیر
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default DeleteMemoryModal;
