import TrashIcon from '@assets/icons/trash.svg';

import FileInputManager from '@components/ui/FileInputManager';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { InputsPropsType } from './type';

const Inputs = ({ fileDataHandler, canDeleteImage, deleteHandler, uploadImageLoading }: InputsPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="py-5">
      <Typography scale="Title" size="Small" textAlign="center" className="w-full p-2">
        عکس خود را انتخاب کنید
      </Typography>
      <div className=" divide-y flex flex-col gap-3">
        <FileInputManager
          ShowFileInput={false}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />

        {canDeleteImage && JSON.parse(canDeleteImage) && (
          <div className="flex justify-end items-center gap-2 p-2" onClick={deleteHandler}>
            <Typography scale="Body" size="Large" color="Error_Error">
              حذف عکس
            </Typography>
            <div
              className="w-14 h-14 rounded-full flex justify-center items-center"
              style={{ border: `1px solid ${colors.Surface_SurfaceVariant}` }}
            >
              <TrashIcon className="w-7 h-7" style={{ stroke: colors.Error_Error }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inputs;
