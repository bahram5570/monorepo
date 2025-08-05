import TrashIcon from '@assets/icons/trash.svg';

import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import useDelete from './__hooks__/useDelete';

const DeletePartnerModal = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { deleteHandler, isLoading } = useDelete();

  return (
    <CustomModal isSlidingMode={false}>
      <div className="w-[290px] flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 flex justify-center items-center rounded-full"
          style={{
            backgroundColor: 'rgb(242, 79, 122,0.15)',
          }}
        >
          <TrashIcon className="w-6 h-6 rounded-full" style={{ stroke: colors.Error_Error }} />
        </div>

        <Typography scale="Title" size="Medium">
          حذف همدل
        </Typography>
        <div className="flex flex-col items-center">
          <Typography scale="Body" size="Medium">
            از حذف همدلت مطمئنی؟
          </Typography>
          <Typography scale="Body" size="Medium" textAlign="center">
            بعد از حذف همدلی کلیه اطلاعاتت (تاریخچه چالش ها، خاطره بازی، پیام ها) پاک میشه
          </Typography>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <Button
            size="medium"
            variant="outline"
            color="FREE-STYLES"
            onClick={deleteHandler}
            contentsColor={colors.Error_Error}
            buttonColor={colors.Error_ErrorContainer}
            style={{ backgroundColor: colors.Error_ErrorContainer }}
            isLoading={isLoading}
          >
            مطمئنم
          </Button>

          <Button variant="fill" size="medium" color="surface" onClick={() => router.back()}>
            خیر
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default DeletePartnerModal;
