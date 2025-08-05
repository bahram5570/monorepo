import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import useDelete from './__hooks__/useDelete';

const DeleteNoteModal = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { deleteHandler, isLoading } = useDelete();
  const { getQueryParams } = useQueryParamsHandler();

  const noteId = getQueryParams('noteId');

  return (
    <div className="max-w-md flex flex-col items-center gap-4">
      <Typography scale="Title" size="Medium">
        حذف یادداشت
      </Typography>
      <Typography scale="Body" size="Large">
        مطمئنی می‌خوای این یادداشت رو حذف کنی؟
      </Typography>

      <div className="w-full flex items-center justify-between gap-2 mt-3">
        <Button
          size="medium"
          variant="outline"
          color="FREE-STYLES"
          onClick={() => deleteHandler({ noteId })}
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
  );
};

export default DeleteNoteModal;
